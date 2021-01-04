import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from '../entities/user.schema';
import { JwtPayload } from './strategies/jwt.strategy';

@Injectable()
export class SecurityService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {
  }

  async validateUser(username: string, password: string): Promise<User> {
    const query: any = { auth: { username, password } };
    return await this.userModel.findOne(query).exec();
  }

  async signIn(user: User): Promise<string> {
    const payload: JwtPayload = {
      username: user.auth.username,
      sub: user._id.toString(),
    };
    return this.jwtService.sign(payload);
  }

  async validateToken(token: string): Promise<JwtPayload> {
    return await this.jwtService.verifyAsync(token);
  }
}
