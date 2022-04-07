import { Module } from '@nestjs/common';
import { ownerProviders } from 'src/owner/owner.providers';
import { DatabaseModule } from '../database.module';
import { DogProviders } from './dog.providers';
import { DogResolver } from './dog.resolver';
import { DogService } from './dog.service';

@Module({
  imports: [DatabaseModule],
  providers: [DogResolver, DogService, ...DogProviders, ...ownerProviders],
})
export class DogModule {}
