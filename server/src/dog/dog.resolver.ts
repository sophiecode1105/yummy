import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateDogInput, Dog } from './schemas/dog.schema';
import { DogService } from './dog.service';

@Resolver('Dog')
export class DogResolver {
  constructor(private dogService: DogService) {}

  @Query(() => [Dog])
  async getAllDog() {
    return await this.dogService.findAll();
  }
  @Mutation(() => Dog)
  async addDog(@Args('dog') Dog: CreateDogInput) {
    return await this.dogService.addDog(Dog);
  }
}
