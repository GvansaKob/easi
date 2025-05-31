import { PartialType } from '@nestjs/mapped-types';
import { CreateAideDto } from './create-aide.dto';

export class UpdateAideDto extends PartialType(CreateAideDto) {}
