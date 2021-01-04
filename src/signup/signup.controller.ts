import { Body, Controller, Post } from '@nestjs/common';
import { SignUpRequest, SignUpResponse } from './signup.dtos';
import { SignUpService } from './signup.service';

@Controller()
export class SignUpController {
  constructor(private signUpService: SignUpService) {
  }

  @Post('signup')
  async signUp(@Body() signUpRequest: SignUpRequest): Promise<SignUpResponse> {
    const result = await this.signUpService.createUserAccount(signUpRequest);
    return {
      id: result,
    };
  }
}
