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
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST || '127.0.0.1',
        port: parseInt(process.env.DB_PORT || '3306', 10),
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_DATABASE || 'easi_db',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        // synchronize: process.env.NODE_ENV === 'development',
        autoLoadEntities: true,
        // logging: process.env.NODE_ENV === 'development',
        synchronize: true,
        logging: true,

      }),
    }),

    AideModule,

    UserModule,

    AuthModule,

    FavoriModule,
  ],
})
export class AppModule { }
