import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  email: String,
  nickname: String,
  password: String,
  img: String,
  intro: String,
  myRecipes: [String],
  likeMenus: [String],
});

@ObjectType()
export class User extends Document {
  @Field()
  _id: string;

  @Field()
  email: string;

  @Field()
  nickname: string;

  @Field()
  password: string;

  @Field()
  img: string;

  @Field()
  intro: string;

  @Field()
  myRecipes: [string];

  @Field()
  likeMenus: [string];
}
