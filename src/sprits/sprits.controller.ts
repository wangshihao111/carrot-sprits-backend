import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Controller('sprits')
// @UseGuards(AuthGuard)
export class SpritsController {
  @Get('list')
  list() {
    return 'list'
  }
}
