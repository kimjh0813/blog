export interface MdxMetaData {
  title: string;
  category: string;
  updatedAt: string;
  path: string;
}

export interface PostsData {
  body: {
    content: string;
    stringValue: string;
  };
  metaData: MdxMetaData;
}
