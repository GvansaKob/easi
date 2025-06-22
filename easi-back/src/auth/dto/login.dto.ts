import { IsEmail, IsString } from 'class-validator'

export class LoginDto {
  @IsEmail({}, { message: 'Email invalide' })
  email: string

  @IsString({ message: 'Le mot de passe est requis' })
  mot_de_passe: string
}
