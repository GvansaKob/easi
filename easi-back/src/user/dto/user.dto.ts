import { Exclude, Expose } from 'class-transformer'

@Exclude()
export class UserDto {
  @Expose()
  id: number

  @Expose()
  nom: string

  @Expose()
  prenom: string

  @Expose()
  email: string

  @Expose()
  date_de_naissance: Date

  @Expose()
  statut: number

  @Expose()
  profil_complet: boolean

  @Expose()
  image: string | null

  @Expose()
  createdAt: Date
}
