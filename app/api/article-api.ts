import { Article, ArticleResp } from "../types/article-type";

export class ArticleApi {
  static async fetchToday():Promise<Article[]>{
    return (await ((
      await fetch("http://localhost:3090/news")
    ).json()) as ArticleResp).results
  }
}