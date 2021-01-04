import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, ObjectId } from 'mongoose';

export type UserDocument = User & Document;

export class Auth {
  username: string;
  password: string;
}

export class Profile {
  name: string;
  age: number;
}

@Schema()
export class User {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: ObjectId;

  @Prop({ type: Auth })
  auth: Auth;

  @Prop({ type: Profile })
  profile: Profile;
}

export const UserSchema = SchemaFactory.createForClass(User);
