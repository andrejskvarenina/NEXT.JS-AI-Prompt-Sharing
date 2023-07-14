type PostId = string;

export type Post = {
  _id: PostId;
  creator: PostId;
  prompt: string;
  tag: string;
};

