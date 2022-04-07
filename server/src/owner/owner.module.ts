import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { DatabaseModule } from 'src/database.module';
import { ownerProviders } from './owner.providers';

@Module({
  imports: [DatabaseModule],
  providers: [OwnerService, OwnerResolver, ...ownerProviders],
})
export class OwnerModule {}
