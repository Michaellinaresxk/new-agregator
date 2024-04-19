import { Source } from "./Articles";

export type UserProperties = {
  id: string;
  name: string;
  email: string;
};

export type ArticleProperties = {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
