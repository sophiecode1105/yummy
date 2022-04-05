import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog } from './schemas/dog.schema';

@Controller('dog')
export class DogController {
  constructor(private readonly DogService: DogService) {}

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    await this.DogService.create(createDogDto);
  }

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.DogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Dog> {
    return this.DogService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.DogService.delete(id);
  }
}
