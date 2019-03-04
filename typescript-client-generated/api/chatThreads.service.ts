import { BadRequest } from '../model/badRequest';
import { ChatThread } from '../model/chatThread';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import URI from "urijs";


export class ChatThreadsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Returns chat thread report
   * @summary Returns chat thread report
   * @param threadId chat thread id
   * @param type report type. Accepted values summaryReport
   * @param accept Expected response format. Accepted values application/vnd.openxmlformats for Excel response
  */
  public getChatThreadReport(threadId: number, type: string, accept?: string, ):Promise<string> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(threadId))}/reports/${encodeURIComponent(String(type))}`);
    const options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return response.json();
    });
  }


  /**
   * Returns list of chat threads
   * @summary Returns list of chat threads
   * @param originId Filter chat threads by origin id
  */
  public listChatThreads(originId?: string, ):Promise<Array<ChatThread>> {
    const uri = new URI(`${this.basePath}/chatThreads`);
    if (originId !== undefined && originId !== null) {
        uri.addQuery('originId', <any>originId);
    }
    const options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return response.json();
    });
  }

}