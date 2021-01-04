import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User, UserDocument } from '../entities/user.schema';
import { SignUpRequest } from './signup.dtos';
import * as mongoose from 'mongoose';

@Injectable()
export class SignUpService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async createUserAccount(signUpRequest: SignUpRequest): Promise<ObjectId> {
    const accountModel = new this.userModel({
      _id: mongoose.Types.ObjectId(),
      auth: {
        username: signUpRequest.username,
        password: signUpRequest.password,
      },
      profile: {
        name: signUpRequest.name,
        age: signUpRequest.age,
      },
    });
    await accountModel.save();
    return await accountModel._id;
  }
}
