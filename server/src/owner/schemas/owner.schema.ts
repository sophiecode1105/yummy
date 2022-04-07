import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const OwnerSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: String,
  age: Number,
  gender: String,
  job: Boolean,
});

@ObjectType()
export class Owner extends Document {
  @Field()
  name: string;

  @Field()
  gender: string;

  @Field()
  age: number;

  @Field()
  job: boolean;
}

@ObjectType()
export class CreateOwnerInput {
  @Field()
  name: string;

  @Field()
  gender: string;

  @Field()
  age: number;

  @Field()
  job: boolean;
}
