import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Dog } from './schemas/dog.schema';

@Injectable()
export class DogService {
  constructor(
    @Inject('DOG_MODEL')
    private DogModel: Model<Dog>,
  ) {}

  async findAll(): Promise<Dog[]> {
    return this.DogModel.find().exec();
  }
  async addDog(Dog: Dog): Promise<Dog> {
    return this.DogModel.create(Dog);
  }
}
