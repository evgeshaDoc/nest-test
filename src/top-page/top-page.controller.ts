import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
  constructor() {}

  @Post('save')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  @Get('get/:alias')
  async get(@Param('alias') alias: string) {}

  @Delete('delete')
  async delete(@Param('id') id: string) {}


  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindTopPageDto) {}
}
