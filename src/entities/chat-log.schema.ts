import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, ObjectId } from 'mongoose';

export type ChatLogDocument = ChatLog & Document;

@Schema()
export class ChatLog {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: ObjectId;

  @Prop({ type: String })
  userId: string;

  @Prop({ type: String })
  text: string;

  @Prop({ type: Date })
  logDate: Date;

}

export const ChatLogSchema = SchemaFactory.createForClass(ChatLog);
