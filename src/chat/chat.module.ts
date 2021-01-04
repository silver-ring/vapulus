import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { SecurityModule } from '../security/security.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatLog, ChatLogSchema } from '../entities/chat-log.schema';
import { ChatService } from './chat.service';

@Module({
  providers: [ChatGateway, ChatService],
  imports: [
    SecurityModule,
    MongooseModule.forFeature([{ name: ChatLog.name, schema: ChatLogSchema }]),
  ],
  exports: [ChatService],
})
export class ChatModule {
}
