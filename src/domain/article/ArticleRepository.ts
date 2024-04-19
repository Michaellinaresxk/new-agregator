import type Article from "./Article";

export default interface ArticleRepository {
  registerUser(
    source: string,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
  ): Promise<Article>;
}
