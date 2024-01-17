import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
  id = 'id',
  title = 'title',
  emoji = 'emoji',
  type = 'type',
  thumbNailUrl = 'thumbNailUrl',
  excerpt = 'excerpt',
  contentPath = 'contentPath',
  md5Hash = 'md5Hash',
  published = 'published',
  publishDate = 'publishDate',
  like = 'like',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(PostScalarFieldEnum, {
  name: 'PostScalarFieldEnum',
  description: undefined,
});
