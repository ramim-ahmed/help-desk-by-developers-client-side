export type TLike = {
  id: string;
  userId: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
};
export type TComment = {
  id: string;
  title: string;
  userId: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
};
export type TPost = {
  id: string;
  title: string;
  platformId: string;
  postTypeId: string;
  content: string;
  uploadImg: string;
  userId: string;
  postedDate: string;
  Like: Array<TLike>;
  Comment: Array<TComment>;
  createdAt: string;
  updatedAt: string;
};

export type TPlatform = {
  id: string;
  title: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
};

export type TPostType = {
  id: string;
  title: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
};
