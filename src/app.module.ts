import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SecurityModule } from './security/security.module';
import { SignInModule } from './signin/signin.module';
import { SignUpModule } from './signup/signup.module';
import { ProfileModule } from './profile/profile.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    SecurityModule,
    SignInModule,
    SignUpModule,
    ProfileModule,
    ChatModule,
  ],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule {
}
