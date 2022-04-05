import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog, DogDocument } from './schemas/dog.schema';

@Injectable()
export class DogService {
  constructor(
    @InjectModel(Dog.name) private readonly dogModel: Model<DogDocument>,
  ) {}

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    const createdDog = await this.dogModel.create(createDogDto);
    return createdDog;
  }

  async findAll(): Promise<Dog[]> {
    return this.dogModel.find().exec();
  }

  async findOne(id: string): Promise<Dog> {
    return this.dogModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.dogModel
      .findByIdAndRemove({
        _id: id,
      })
      .exec();
    return deletedCat;
  }
}
