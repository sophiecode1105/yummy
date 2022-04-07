import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { DatabaseModule } from 'src/database.module';
import { ownerProviders } from './owner.providers';
import { DogProviders } from 'src/dog/dog.providers';

@Module({
  imports: [DatabaseModule],
  providers: [OwnerService, OwnerResolver, ...ownerProviders, ...DogProviders],
})
export class OwnerModule {}
