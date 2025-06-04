import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
