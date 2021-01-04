import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../security/guards/jwt.guard';
import { Request } from 'express';
import { ProfileService } from './profile.service';
import { JwtPayload } from '../security/strategies/jwt.strategy';

@Controller()
export class ProfileController {
  constructor(private profileService: ProfileService) {
  }

  @UseGuards(JwtGuard)
  @Get('profile')
  async signUp(@Req() request: Request): Promise<any> {
    const payload = request.user as JwtPayload;
    return await this.profileService.getProfile(payload.sub);
  }
}
