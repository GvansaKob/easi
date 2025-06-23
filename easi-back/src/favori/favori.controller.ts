import { Controller, Post, Delete, Param, Get } from '@nestjs/common';
import { FavoriService } from './favori.service';

@Controller('favoris')
export class FavoriController {
  constructor(private readonly favoriService: FavoriService) {}

  @Post(':userId/:aideId')
  addFavori(@Param('userId') userId: number, @Param('aideId') aideId: number) {
    return this.favoriService.addFavori(userId, aideId);
  }

  @Delete(':userId/:aideId')
  removeFavori(@Param('userId') userId: number, @Param('aideId') aideId: number) {
    return this.favoriService.removeFavori(userId, aideId);
  }

  @Get('check/:userId/:aideId')
  isFavori(@Param('userId') userId: number, @Param('aideId') aideId: number) {
    return this.favoriService.isFavori(userId, aideId);
  }

  @Get(':userId')
  getFavorisByUser(@Param('userId') userId: number) {
    return this.favoriService.getFavorisByUser(userId);
  }
}
