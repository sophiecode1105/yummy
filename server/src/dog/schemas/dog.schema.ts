import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const DogSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: String,
  color: String,
  age: Number,
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Owner' },
});

@ObjectType()
export class Dog extends Document {
  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  age: number;

  @Field()
  owner: object;
}
