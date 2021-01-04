import { Module } from '@nestjs/common';
import { SignInService } from './signin.service';
import { SecurityModule } from '../security/security.module';
import { SignInController } from './signin.controller';

@Module({
  imports: [SecurityModule],
  providers: [SignInService],
  exports: [SignInService],
  controllers: [SignInController],
})
export class SignInModule {}
