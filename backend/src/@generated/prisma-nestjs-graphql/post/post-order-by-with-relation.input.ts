import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

@InputType()
export class PostOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  emoji?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  thumbNailUrl?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  excerpt?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  contentPath?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  md5Hash?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  published?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  publishDate?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  like?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}
