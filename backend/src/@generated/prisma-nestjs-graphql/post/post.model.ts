import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  emoji!: string | null;

  @Field(() => String, { nullable: false })
  type!: string;

  @Field(() => String, { nullable: true })
  thumbNailUrl!: string | null;

  @Field(() => String, { nullable: true })
  excerpt!: string | null;

  @Field(() => String, { nullable: false })
  contentPath!: string;

  @Field(() => String, { nullable: false })
  md5Hash!: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  published!: boolean | null;

  @Field(() => Date, { nullable: true })
  publishDate!: Date | null;

  @Field(() => Int, { nullable: false, defaultValue: 0 })
  like!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
