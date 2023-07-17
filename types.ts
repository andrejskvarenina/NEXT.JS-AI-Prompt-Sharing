type PostId = string;

export type PostType = {
  _id: PostId;
  creator: UserType;
  prompt: string;
  tag: string;
};

type UserId = string;

export type UserType = {
  _id: UserId;
  email: string;
  username: string;
  image: string;
};

export type PromptType = {
  prompt: string;
  tag: string;
}
