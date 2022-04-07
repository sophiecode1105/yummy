import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Owner } from './schemas/owner.schema';
import { OwnerService } from './owner.service';
import { Dog } from 'src/dog/schemas/dog.schema';

@Resolver()
export class OwnerResolver {
  constructor(private OwnerService: OwnerService) {}

  @Query()
  async getAllOwner() {
    return await this.OwnerService.findAll();
  }

  @Mutation()
  async addOwner(@Args('Owner') Owner: Owner) {
    return await this.OwnerService.addOwner(Owner);
  }

  @Mutation()
  async deleteOwner(@Args('Owner') Owner: Owner) {
    return this.OwnerService.deleteOwner(Owner);
  }

  @Mutation()
  async updateOwner(
    @Args('Owner') Owner: Owner,
    @Args('uOwner') uOwner: Owner,
  ) {
    return this.OwnerService.updateOwner(Owner, uOwner);
  }

  @Mutation()
  async haveDog(@Args('Dog') Dog: string, @Args('Owner') Owner: string) {
    console.log('리절브');
    return this.OwnerService.haveDog(Dog, Owner);
  }
}
