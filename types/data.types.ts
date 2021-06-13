export interface User {
  userId: string;
  username: string;
  name: string;
  display_picture: string;
  bio: string;
  email: string;
  posts: string[];
  followers: string[];
  following: string[];
  createdAt: Date;
  updatedAt: Date;
  notifications: Notification[];
  role: Roles;
}

enum Roles {
  Admin,
  Modertor,
  User,
}

interface Notification {}

export interface Post {
  ref_id: string;
  title: string;
  description?: string;
  image?: string;
  content: string;
  read_time: number;
  date: Date;
  tags: string[];
  likes: string[];
  comments: CommentType[];
  author_id: string;
  createdAt: Date;
  updatedAt: Date;
}

// "Comment" is a default typescript type
export interface CommentType {
  user_id: string;
  comment: string;
}
