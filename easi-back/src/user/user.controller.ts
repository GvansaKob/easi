import { Controller, Get, Post, Put, UseGuards, UseInterceptors, UploadedFile, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { plainToInstance } from 'class-transformer';
import { UserDto } from 'src/user/dto/user.dto';
import { ApiTags, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';

@ApiTags('Utilisateurs')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    async register(@Body() userData: Partial<User>): Promise<UserDto> {
        const user = await this.userService.register(userData);
        return plainToInstance(UserDto, user);
    }

    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @Get('me')
    async getProfile(@Request() req): Promise<UserDto> {
        const user = await this.userService.findByEmail(req.user.email);
        return plainToInstance(UserDto, user);
    }

    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @Post('upload-image')
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${extname(file.originalname)}`;
                    callback(null, filename);
                },
            }),
        }),
    )
    async uploadProfileImage(
        @UploadedFile() file: Express.Multer.File,
        @Request() req,
    ) {
        const userId = req.user.id;
        const imagePath = file.filename;
        await this.userService.updateUserImage(userId, imagePath);
        return { image: imagePath };
    }

    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @Put('update-profile')
    async updateProfile(
        @Request() req,
        @Body() updateData: Partial<User>,
    ): Promise<UserDto> {
        const userId = req.user.id;
        const updatedUser = await this.userService.updateProfile(userId, updateData);
        return plainToInstance(UserDto, updatedUser);
    }
}
