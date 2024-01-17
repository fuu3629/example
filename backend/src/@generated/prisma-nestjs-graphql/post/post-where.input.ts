import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PostWhereInput {
  @Field(() => [PostWhereInput], { nullable: true })
  AND?: Array<PostWhereInput>;

  @Field(() => [PostWhereInput], { nullable: true })
  OR?: Array<PostWhereInput>;

  @Field(() => [PostWhereInput], { nullable: true })
  NOT?: Array<PostWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  title?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  emoji?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  type?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  thumbNailUrl?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  excerpt?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  contentPath?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  md5Hash?: StringFilter;

  @Field(() => BoolNullableFilter, { nullable: true })
  published?: BoolNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  publishDate?: DateTimeNullableFilter;

  @Field(() => IntFilter, { nullable: true })
  like?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
