import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  title!: number;

  @Field(() => Int, { nullable: false })
  emoji!: number;

  @Field(() => Int, { nullable: false })
  type!: number;

  @Field(() => Int, { nullable: false })
  thumbNailUrl!: number;

  @Field(() => Int, { nullable: false })
  excerpt!: number;

  @Field(() => Int, { nullable: false })
  contentPath!: number;

  @Field(() => Int, { nullable: false })
  md5Hash!: number;

  @Field(() => Int, { nullable: false })
  published!: number;

  @Field(() => Int, { nullable: false })
  publishDate!: number;

  @Field(() => Int, { nullable: false })
  like!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
