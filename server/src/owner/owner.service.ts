import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Owner } from './schemas/owner.schema';
import { Dog } from 'src/dog/schemas/dog.schema';

@Injectable()
export class OwnerService {
  constructor(
    @Inject('OWNER_MODEL')
    private OwnerModel: Model<Owner>,
  ) {}

  async findAll(): Promise<Owner[]> {
    console.log('겟올 서비스');

    return this.OwnerModel.find().exec();
  }
  async addOwner(Owner: Owner): Promise<Owner> {
    console.log('애드 서비스');
    const b = await this.OwnerModel.create(Owner);
    console.log(b);
    return b;
  }
  async deleteOwner(Owner: Owner) {
    const a = await this.OwnerModel.deleteOne({ name: Owner.name });
    return a.deletedCount !== 0 ? true : false;
  }
  async updateOwner(Owner: Owner, uOwner: Owner) {
    console.log('업뎃 서비스');
    const a = await this.OwnerModel.updateOne({ name: Owner.name }, uOwner);
    return a.modifiedCount !== 0 ? true : false;
  }
  async haveDog(Dog: string, Onwer: string) {
    console.log('해브도그');
    const owner = await this.OwnerModel.findOne({ name: Onwer });
    owner.dog.push(Dog);
    owner.save();
    return true;
  }
}
