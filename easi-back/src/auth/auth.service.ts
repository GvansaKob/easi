import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(email: string, plainPassword: string): Promise<any> {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Email ou mot de passe incorrect');
        }

        const isPasswordValid = await bcrypt.compare(plainPassword, user.mot_de_passe);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Email ou mot de passe incorrect');
        }

        const { mot_de_passe, ...result } = user;
        return result;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
