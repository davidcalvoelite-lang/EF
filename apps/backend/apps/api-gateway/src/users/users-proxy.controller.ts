import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UpdatePreferencesDto, UpdateProfileDto } from '@ef/contracts';
import { UsersProxyService } from './users-proxy.service';

@Controller('users')
export class UsersProxyController {
  constructor(private readonly usersProxy: UsersProxyService) {}

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersProxy.findById(id);
  }

  @Patch(':id/profile')
  updateProfile(@Param('id') id: string, @Body() dto: UpdateProfileDto) {
    return this.usersProxy.updateProfile(id, dto);
  }

  @Get(':id/preferences')
  getPreferences(@Param('id') id: string) {
    return this.usersProxy.getPreferences(id);
  }

  @Patch(':id/preferences')
  updatePreferences(
    @Param('id') id: string,
    @Body() dto: UpdatePreferencesDto,
  ) {
    return this.usersProxy.updatePreferences(id, dto);
  }
}
