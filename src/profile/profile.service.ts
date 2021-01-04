import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../entities/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProfileService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async getProfile(userId: string): Promise<any> {
    const result = await this.userModel.findById(userId).exec();
    if (!result) {
      return null;
    } else {
      return result.profile;
    }
  }
}
