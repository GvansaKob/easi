import { Controller, Get, Post, UseGuards, UseInterceptors, UploadedFile, Request, Body, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    register(@Body() userData: Partial<User>): Promise<User> {
        return this.userService.register(userData);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('upload-image')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                callback(null, uniqueSuffix + extname(file.originalname));
            }
        }),
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Request() req) {
        const userId = req.user.id;
        const imagePath = file.filename;
        await this.userService.updateUserImage(userId, imagePath);
        return { imagePath };
    }
}
