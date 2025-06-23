import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favori } from 'src/entities/favori.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FavoriService {
  constructor(
    @InjectRepository(Favori)
    private favoriRepository: Repository<Favori>,
  ) {}

  async addFavori(userId: number, aideId: number): Promise<Favori> {
    const favori = this.favoriRepository.create({ user: { id: userId }, aide: { id: aideId } });
    return this.favoriRepository.save(favori);
  }

  async removeFavori(userId: number, aideId: number): Promise<void> {
    await this.favoriRepository.delete({ user: { id: userId }, aide: { id: aideId } });
  }

  async isFavori(userId: number, aideId: number): Promise<boolean> {
    const favori = await this.favoriRepository.findOne({ where: { user: { id: userId }, aide: { id: aideId } } });
    return !!favori;
  }

  async getFavorisByUser(userId: number) {
    return this.favoriRepository.find({
      where: { user: { id: userId } },
      relations: ['aide'],
    });
  }
}
