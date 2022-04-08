import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { userProvider } from './user.provider';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, UserService, ...userProvider],
})
export class UserModule {}
