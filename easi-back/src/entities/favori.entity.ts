import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Aide } from './aide.entity';

@Entity()
export class Favori {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.favoris, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Aide, aide => aide.favoris, { onDelete: 'CASCADE' })
  aide: Aide;
}
