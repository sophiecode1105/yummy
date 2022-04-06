import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const DogSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: String,
  number: String,
  email: String,
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
