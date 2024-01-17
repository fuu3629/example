import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostCountAggregate } from './post-count-aggregate.output';
import { PostAvgAggregate } from './post-avg-aggregate.output';
import { PostSumAggregate } from './post-sum-aggregate.output';
import { PostMinAggregate } from './post-min-aggregate.output';
import { PostMaxAggregate } from './post-max-aggregate.output';

@ObjectType()
export class PostGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  emoji?: string;

  @Field(() => String, { nullable: false })
  type!: string;

  @Field(() => String, { nullable: true })
  thumbNailUrl?: string;

  @Field(() => String, { nullable: true })
  excerpt?: string;

  @Field(() => String, { nullable: false })
  contentPath!: string;

  @Field(() => String, { nullable: false })
  md5Hash!: string;

  @Field(() => Boolean, { nullable: true })
  published?: boolean;

  @Field(() => Date, { nullable: true })
  publishDate?: Date | string;

  @Field(() => Int, { nullable: false })
  like!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => PostCountAggregate, { nullable: true })
  _count?: PostCountAggregate;

  @Field(() => PostAvgAggregate, { nullable: true })
  _avg?: PostAvgAggregate;

  @Field(() => PostSumAggregate, { nullable: true })
  _sum?: PostSumAggregate;

  @Field(() => PostMinAggregate, { nullable: true })
  _min?: PostMinAggregate;

  @Field(() => PostMaxAggregate, { nullable: true })
  _max?: PostMaxAggregate;
}
