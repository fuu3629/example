import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PostCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  emoji?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  thumbNailUrl?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  excerpt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  contentPath?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  md5Hash?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  published?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  publishDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  like?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}
