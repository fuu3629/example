import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  emoji?: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  thumbNailUrl?: string;

  @Field(() => String, { nullable: true })
  excerpt?: string;

  @Field(() => String, { nullable: true })
  contentPath?: string;

  @Field(() => String, { nullable: true })
  md5Hash?: string;

  @Field(() => Boolean, { nullable: true })
  published?: boolean;

  @Field(() => Date, { nullable: true })
  publishDate?: Date | string;

  @Field(() => Int, { nullable: true })
  like?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
