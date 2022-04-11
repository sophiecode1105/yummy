import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';

@Resolver()
export class AppResolver {
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}

  @Query()
  async getPostById(@Args('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  // @Query()
  // async getPublishedPosts(): Promise<PostModel[]> {
  //   return this.postService.posts({
  //     where: { published: true },
  //   });
  // }

  // @Query()
  // async getFilteredPosts(
  //   @Args('searchString') searchString: string,
  // ): Promise<PostModel[]> {
  //   return this.postService.posts({
  //     where: {
  //       OR: [
  //         {
  //           title: { contains: searchString },
  //         },
  //         {
  //           content: { contains: searchString },
  //         },
  //       ],
  //     },
  //   });
  // }

  // @Mutation()
  // async createDraft(
  //   @Args('postData')
  //   postData: {
  //     title: string;
  //     content?: string;
  //     authorEmail: string;
  //   },
  // ): Promise<PostModel> {
  //   const { title, content, authorEmail } = postData;
  //   return this.postService.createPost({
  //     title,
  //     content,
  //     author: {
  //       connect: { email: authorEmail },
  //     },
  //   });
  // }

  // @Mutation()
  // async signupUser(
  //   @Args('userData') userData: { name?: string; email: string },
  // ): Promise<UserModel> {
  //   return this.userService.createUser(userData);
  // }

  // @Mutation()
  // async publishPost(@Args('id') id: string): Promise<PostModel> {
  //   return this.postService.updatePost({
  //     where: { id: Number(id) },
  //     data: { published: true },
  //   });
  // }

  // @Mutation()
  // async deletePost(@Args('id') id: string): Promise<PostModel> {
  //   return this.postService.deletePost({ id: Number(id) });
  // }
}
