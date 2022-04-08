import { Query, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private UserService: UserService) {}

  @Query()
  async getAllUser() {
    return;
  }

  @Query()
  async getUser() {
    return;
  }

  @Mutation()
  async joinUser() {}

  @Mutation()
  async updateUser() {}

  @Mutation()
  async deleteUser() {}

  @Mutation()
  async login() {}

  @Mutation()
  async emailCertify() {}
}
