import { SignAuthenticationService } from '../model/signAuthenticationService';
export declare class SignAuthenticationServicesService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * List available sign authentication services
     * @summary List sign authentication services
    */
    listSignAuthenticationServices(): Promise<Array<SignAuthenticationService>>;
}
