import { NewsArticle } from '../model/newsArticle';
export declare class NewsArticlesService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates news article
     * @summary Create news article
     * @param body Payload
    */
    createNewsArticle(body: NewsArticle): Promise<NewsArticle>;
    /**
     * Deletes news article
     * @summary Delete news article
     * @param newsArticleId news article id id
    */
    deleteNewsArticle(newsArticleId: number): Promise<any>;
    /**
     * Finds news article by id
     * @summary Find news article
     * @param newsArticleId news article id id
    */
    findNewsArticle(newsArticleId: number): Promise<NewsArticle>;
    /**
     * Lists news articles
     * @summary Lists news articles
    */
    listNewsArticles(): Promise<Array<NewsArticle>>;
    /**
     * Updates news article
     * @summary Update news article
     * @param body Payload
     * @param newsArticleId news article id id
    */
    updateNewsArticle(body: NewsArticle, newsArticleId: number): Promise<NewsArticle>;
}
