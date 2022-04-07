import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Dog } from './schemas/dog.schema';
import { Owner } from 'src/owner/schemas/owner.schema';
import { OwnerService } from '../owner/owner.service';

@Injectable()
export class DogService {
  constructor(
    @Inject('DOG_MODEL')
    private DogModel: Model<Dog>,

    @Inject('OWNER_MODEL')
    private OwnerModel: Model<Owner>,
  ) {}

  async findAll(): Promise<Dog[]> {
    console.log('겟올 서비스');
    const ex = await this.DogModel.find().populate('owner').exec();

    return ex;
  }
  async addDog(Dog: Dog): Promise<Dog> {
    console.log('애드 서비스');
    const b = await (await this.DogModel.create(Dog)).populate('owner');
    const c = await this.OwnerModel.findById(Dog.owner);
    c.dog.push(b._id);
    c.save();
    console.log('주인님 :', c);
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
