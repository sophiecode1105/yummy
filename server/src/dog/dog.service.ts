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
    console.log('겟올 서비스');
    return this.DogModel.find().exec();
  }
  async addDog(Dog: Dog): Promise<Dog> {
    console.log('애드 서비스');
    const b = await this.DogModel.create(Dog);
    console.log(b);
    return b;
  }
  async deleteDog(Dog: Dog) {
    const a = await this.DogModel.deleteOne({ name: Dog.name });
    return a.deletedCount !== 0 ? true : false;
  }
  async updateDog(Dog: Dog, uDog: Dog) {
    console.log('업뎃 서비스');
    const a = await this.DogModel.updateOne({ name: Dog.name }, uDog);
    return a.modifiedCount !== 0 ? true : false;
  }
}
