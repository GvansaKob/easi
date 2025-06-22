import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aide } from 'src/entities/aide.entity';
import { Repository, ILike } from 'typeorm';
import * as removeAccents from 'remove-accents';

@Injectable()
export class AideService {
  constructor(
    @InjectRepository(Aide)
    private aideRepository: Repository<Aide>,
  ) { }

  findAll(): Promise<Aide[]> {
    return this.aideRepository.find();
  }

  async create(aideData: Partial<Aide>): Promise<Aide> {
    const aide = this.aideRepository.create(aideData);
    return this.aideRepository.save(aide);
  }

  async findByCategorie(nomCategorie: string): Promise<Aide[]> {
    return this.aideRepository
      .createQueryBuilder('aide')
      .leftJoinAndSelect('aide.categorie', 'categorie')
      .where('categorie.nom = :nom', { nom: nomCategorie })
      .getMany();
  }

  async findById(id: number): Promise<Aide | null> {
    return this.aideRepository.findOne({
      where: { id },
      relations: ['categorie'],
    });
  }

  async rechercherAides(terme: string): Promise<Aide[]> {
    const cleanedTerme = removeAccents(terme.toLowerCase());

    const aides = await this.aideRepository
      .createQueryBuilder('aide')
      .leftJoinAndSelect('aide.categorie', 'categorie')
      .getMany();

    return aides.filter(a =>
      removeAccents(a.titre.toLowerCase()).includes(cleanedTerme)
    );
  }
}
