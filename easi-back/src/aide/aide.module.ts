import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AideController } from './aide.controller';
import { AideService } from './aide.service';
import { Aide } from 'src/entities/aide.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Aide])],
  controllers: [AideController],
  providers: [AideService],
})
export class AideModule {}
