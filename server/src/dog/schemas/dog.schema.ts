import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const DogSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: String,
  color: String,
  age: Number,
});

@ObjectType()
export class Dog extends Document {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  age: number;
}

@ObjectType()
export class CreateDogInput {
  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  age: number;
}
