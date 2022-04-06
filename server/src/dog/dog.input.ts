import { InputType, Field, Int } from '@nestjs/graphql';
@InputType()
export class InputDog {
  @Field()
  readonly title!: string;
  @Field(() => Int)
  readonly price!: number;
}
