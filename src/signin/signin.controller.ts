import { Controller, Post, Req, UseGuards } from '@nestjs/common';

import { SignInService } from './signin.service';
import { SignInResponse } from './signin.dtos';
import { LocalGuard } from '../security/guards/local.guard';
import { Request } from 'express';

@Controller()
export class SignInController {
  constructor(private signInService: SignInService) {
  }

  @UseGuards(LocalGuard)
  @Post('signin')
  async signIn(
    @Req() signInRequest: Request,
  ): Promise<SignInResponse> {
    return await this.signInService.signIn(signInRequest);
  }
}
