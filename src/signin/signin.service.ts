import { Injectable } from '@nestjs/common';
import { SignInResponse } from './signin.dtos';
import { SecurityService } from '../security/security.service';
import { Request } from 'express';
import { User } from '../entities/user.schema';

@Injectable()
export class SignInService {
  constructor(private securityService: SecurityService) {
  }

  async signIn(signInRequest: Request): Promise<SignInResponse> {
    const user = signInRequest.user as User;
    const token = await this.securityService.signIn(user);
    return {
      token,
    };
  }
}
