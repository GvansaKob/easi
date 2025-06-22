import { Controller, Get, Post, UseGuards, UseInterceptors, UploadedFile, Request, Body, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { plainToInstance } from 'class-transformer';
import { UserDto } from 'src/user/dto/user.dto';


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    async register(@Body() userData: Partial<User>): Promise<UserDto> {
        const user = await this.userService.register(userData);
        return plainToInstance(UserDto, user);
    }



    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    async getProfile(@Request() req): Promise<UserDto> {
        const user = await this.userService.findByEmail(req.user.email);
        return plainToInstance(UserDto, user);
    }


    @UseGuards(AuthGuard('jwt'))
    @Post('upload-image')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, callback) => {
                const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${file.originalname.split('.').pop()}`;
                callback(null, filename);
            }
        }),
    }))
    async uploadProfileImage(
        @UploadedFile() file: Express.Multer.File,
        @Request() req,
    ) {
        const userId = req.user.id; // 🔧 ici la vraie correction
        const imagePath = file.filename;

        await this.userService.updateUserImage(userId, imagePath);

        return { imagePath };
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('update-profile')
    async updateProfile(@Request() req, @Body() updateData: Partial<User>): Promise<UserDto> {
        const userId = req.user.id;
        const updatedUser = await this.userService.updateProfile(userId, updateData);
        return plainToInstance(UserDto, updatedUser);
    }





}
