import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { NewsArticle } from '../model/newsArticle';
import * as URI from "urijs";
import { ApiUtils } from "./api";

const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
}

export class NewsArticlesService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates news article
   * @summary Create news article
   * @param body Payload
  */
  public createNewsArticle(body: NewsArticle, ):Promise<NewsArticle> {
    const uri = new URI(`${this.basePath}/newsArticles`);
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      },
      body: JSON.stringify(body)
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Deletes news article
   * @summary Delete news article
   * @param newsArticleId news article id id
  */
  public deleteNewsArticle(newsArticleId: number, ):Promise<any> {
    const uri = new URI(`${this.basePath}/newsArticles/${encodeURIComponent(String(newsArticleId))}`);
    const options = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Finds news article by id
   * @summary Find news article
   * @param newsArticleId news article id id
  */
  public findNewsArticle(newsArticleId: number, ):Promise<NewsArticle> {
    const uri = new URI(`${this.basePath}/newsArticles/${encodeURIComponent(String(newsArticleId))}`);
    const options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Lists news articles
   * @summary Lists news articles
  */
  public listNewsArticles():Promise<Array<NewsArticle>> {
    const uri = new URI(`${this.basePath}/newsArticles`);
    const options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Updates news article
   * @summary Update news article
   * @param body Payload
   * @param newsArticleId news article id id
  */
  public updateNewsArticle(body: NewsArticle, newsArticleId: number, ):Promise<NewsArticle> {
    const uri = new URI(`${this.basePath}/newsArticles/${encodeURIComponent(String(newsArticleId))}`);
    const options = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      },
      body: JSON.stringify(body)
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }

}