import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { AideService } from './aide.service';
import { Aide } from 'src/entities/aide.entity';

@Controller('aides')
export class AideController {
  constructor(private readonly aideService: AideService) { }

  @Get()
  findAll(): Promise<Aide[]> {
    return this.aideService.findAll();
  }

  @Post()
  create(@Body() aideData: Partial<Aide>): Promise<Aide> {
    return this.aideService.create(aideData);
  }

  @Get('categorie/:nom')
  findByCategorie(@Param('nom') nomCategorie: string): Promise<Aide[]> {
    return this.aideService.findByCategorie(nomCategorie);
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Aide | null> {
    return this.aideService.findById(id);
  }

  @Get('recherche/:terme')
  rechercherAides(@Param('terme') terme: string) {
    return this.aideService.rechercherAides(terme);
  }


}
