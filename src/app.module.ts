import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtConfigModule } from './shared/modules/jwt.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(),
    JwtConfigModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
