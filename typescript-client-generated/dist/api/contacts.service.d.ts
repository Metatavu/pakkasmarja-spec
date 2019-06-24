import { Contact } from '../model/contact';
import { Credentials } from '../model/credentials';
export declare class ContactsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Finds contact by id
     * @summary Find contact
     * @param id contact id
    */
    findContact(id: string): Promise<Contact>;
    /**
     * Lists contacts
     * @summary Lists contacts
     * @param search filter results by free text search
    */
    listContacts(search?: string): Promise<Array<Contact>>;
    /**
     * Updates single contact
     * @summary Update contact
     * @param body Payload
     * @param id contact id
    */
    updateContact(body: Contact, id: string): Promise<Contact>;
    /**
     * Updates single contact credentials
     * @summary Update contact credentials
     * @param body Payload
     * @param id contact id
    */
    updateContactCredentials(body: Credentials, id: string): Promise<any>;
}
