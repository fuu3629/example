import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PostCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

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

  @Field(() => Int, { nullable: true })
  like?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
