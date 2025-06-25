import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AideModule } from './aide/aide.module';
import { Aide } from 'src/entities/aide.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FavoriModule } from './favori/favori.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      ssl: {
        rejectUnauthorized: true,
      },
      extra: {
        ssl: {
          rejectUnauthorized: true,
        },
      },
    }),

    AideModule,

    UserModule,

    AuthModule,

    FavoriModule,
  ],
})
export class AppModule { }
