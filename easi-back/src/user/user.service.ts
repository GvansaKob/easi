import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async register(userData: Partial<User>): Promise<User> {
        const existingUser = await this.userRepository.findOneBy({ email: userData.email });
        if (existingUser) {
            throw new ConflictException('Email déjà utilisé');
        }

        const { nom, prenom, email, mot_de_passe, date_de_naissance, statut } = userData;

        if (!mot_de_passe) {
            throw new Error("Le mot de passe est obligatoire");
        }

        const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

        const user = this.userRepository.create({
            nom,
            prenom,
            email,
            mot_de_passe: hashedPassword,
            date_de_naissance,
            statut,
            profil_complet: false,
        });

        return this.userRepository.save(user);
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOneBy({ email });
    }


}