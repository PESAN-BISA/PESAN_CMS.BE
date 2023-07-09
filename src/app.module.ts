import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [AuthModule, UserModule, ConfigModule.forRoot()],
})
export class AppModule {}
