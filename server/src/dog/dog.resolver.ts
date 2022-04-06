import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Dog } from './schemas/dog.schema';
import { DogService } from './dog.service';

@Resolver()
export class DogResolver {
  constructor(private dogService: DogService) {}

  @Query()
  async getAllDog() {
    return await this.dogService.findAll();
  }

  @Mutation()
  async addDog(@Args('dog') Dog: Dog) {
    return await this.dogService.addDog(Dog);
  }

  @Mutation()
  async deleteDog(@Args('dog') Dog: Dog) {
    return this.dogService.deleteDog(Dog);
  }

  @Mutation()
  async updateDog(@Args('dog') Dog: Dog, @Args('udog') uDog: Dog) {
    console.log('반찬투정하지마');

    return this.dogService.updateDog(Dog, uDog);
  }
}
