import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Model, ObjectId } from 'mongoose';
import { ChatLog, ChatLogDocument } from '../entities/chat-log.schema';
import { ChatLogDto } from './chat.dtos';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(ChatLog.name) private chatLogModel: Model<ChatLogDocument>,
  ) {
  }

  async logChat(chatLogDto: ChatLogDto): Promise<ObjectId> {
    const chatLogModel = new this.chatLogModel({
      _id: mongoose.Types.ObjectId(),
      userId: chatLogDto.userId,
      text: chatLogDto.text,
      logDate: new Date(),
    });
    await chatLogModel.save();
    return await chatLogModel._id;
  }
}
