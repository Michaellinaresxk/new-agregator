import type { ArticleProperties } from "../../types/properties";

class Article {
  private constructor(
    public readonly source: string,
    public readonly author: string,
    public readonly title: string,
    public readonly description: string,
    public readonly url: string,
    public readonly urlToImage: string,
    public readonly publishedAt: string,
    public readonly content: string
  ) {}
  static fromProperties(properties: ArticleProperties) {
    const {
      source,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
    } = properties;
    return new Article(
      source,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content
    );
  }
  get properties(): ArticleProperties {
    return Object.freeze({
      source: this.source,
      author: this.author,
      title: this.title,
      description: this.description,
      url: this.url,
      urlToImage: this.urlToImage,
      publishedAt: this.publishedAt,
      content: this.content,
    });
  }
}

export default Article;
