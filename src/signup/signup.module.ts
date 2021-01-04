import { Module } from '@nestjs/common';
import { SignUpService } from './signup.service';
import { SecurityModule } from '../security/security.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../entities/user.schema';
import { SignUpController } from './signup.controller';

@Module({
  imports: [
    SecurityModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [SignUpService],
  exports: [SignUpService],
  controllers: [SignUpController],
})
export class SignUpModule {}
