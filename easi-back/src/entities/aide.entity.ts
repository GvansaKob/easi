import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ManyToOne } from 'typeorm';
import { Categorie } from './categorie.entity';
import { Favori } from './favori.entity';


@Entity()
export class Aide {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre: string;

    @Column()
    description: string;

    @Column('text')
    conditions_eligibilite: string;

    @Column()
    lien_externe: string;

    @Column({ default: true })
    est_active: boolean;

    @ManyToOne(() => Categorie, (categorie) => categorie.aides, { eager: true })
    categorie: Categorie;

    @Column('text', { nullable: true })
    documents: string;

    @OneToMany(() => Favori, favori => favori.aide)
    favoris: Favori[];
}
