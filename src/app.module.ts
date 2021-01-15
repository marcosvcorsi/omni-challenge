import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtConfigModule } from './shared/modules/jwt.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './shared/strategy/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    TypeOrmModule.forRoot(),
    JwtConfigModule,
    UsersModule,
    PostsModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
