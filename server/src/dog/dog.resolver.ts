import { Query, Resolver } from '@nestjs/graphql';
import { Dog } from './schemas/dog.schema';
import { DogService } from './dog.service';

@Resolver('Dog')
export class DogResolver {
  constructor(private dogService: DogService) {}

  @Query(() => [Dog])
  async getAllDog() {
    return await this.dogService.findAll();
  }
}
