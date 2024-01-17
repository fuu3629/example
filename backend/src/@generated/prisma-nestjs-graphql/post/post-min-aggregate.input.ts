import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PostMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  title?: true;

  @Field(() => Boolean, { nullable: true })
  emoji?: true;

  @Field(() => Boolean, { nullable: true })
  type?: true;

  @Field(() => Boolean, { nullable: true })
  thumbNailUrl?: true;

  @Field(() => Boolean, { nullable: true })
  excerpt?: true;

  @Field(() => Boolean, { nullable: true })
  contentPath?: true;

  @Field(() => Boolean, { nullable: true })
  md5Hash?: true;

  @Field(() => Boolean, { nullable: true })
  published?: true;

  @Field(() => Boolean, { nullable: true })
  publishDate?: true;

  @Field(() => Boolean, { nullable: true })
  like?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}
