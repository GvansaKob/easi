import { IsEmail, IsNotEmpty, MinLength, IsDateString } from 'class-validator'

export class RegisterDto {
    @IsNotEmpty({ message: 'Le prénom est requis' })
    prenom: string

    @IsNotEmpty({ message: 'Le nom est requis' })
    nom: string

    @IsDateString()
    date_de_naissance: Date


    @IsEmail({}, { message: 'Adresse e-mail invalide' })
    email: string

    @IsNotEmpty({ message: 'Le mot de passe est requis' })
    @MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
    mot_de_passe: string
}
