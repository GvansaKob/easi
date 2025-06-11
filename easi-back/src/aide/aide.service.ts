import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aide } from 'src/entities/aide.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AideService {
  constructor(
    @InjectRepository(Aide)
    private aideRepository: Repository<Aide>,
  ) {}

  findAll(): Promise<Aide[]> {
    return this.aideRepository.find();
  }

  async create(aideData: Partial<Aide>): Promise<Aide> {
  const aide = this.aideRepository.create(aideData);
  return this.aideRepository.save(aide);
}

}
