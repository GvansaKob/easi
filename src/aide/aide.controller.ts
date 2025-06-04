import { Controller, Get, Body, Post } from '@nestjs/common';
import { AideService } from './aide.service';
import { Aide } from 'src/entities/aide.entities';

@Controller('aides')
export class AideController {
  constructor(private readonly aideService: AideService) {}

  @Get()
  findAll(): Promise<Aide[]> {
    return this.aideService.findAll();
  }

  @Post()
  create(@Body() aideData: Partial<Aide>): Promise<Aide> {
    return this.aideService.create(aideData);
  }
}
