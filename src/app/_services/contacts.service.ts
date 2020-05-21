import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContactModel} from '../model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  protected basePath = environment.basePath;

  constructor(private httpClient: HttpClient) {
  }

  getContacts(): Observable<ContactModel[]> {
    return this.httpClient.get<ContactModel[]>(`${this.basePath}/contacts`);
  }

  getContactById(id: any): Observable<ContactModel> {
    const params = new HttpParams().set('id', id);
    return this.httpClient.get<ContactModel>(`${this.basePath}/contacts`, {params});
  }

  createContact(contact: ContactModel): Observable<ContactModel> {
    return this.httpClient.post<ContactModel>(`${this.basePath}/contacts`, contact);
  }

  updateContact(contact: Partial<ContactModel>): Observable<ContactModel> {
    return this.httpClient.patch<ContactModel>(`${this.basePath}/contacts/${contact.id}`, contact);
  }

  removeContact(id: any): Observable<ContactModel> {
    return this.httpClient.delete<ContactModel>(`${this.basePath}/contacts/${id}`);
  }
}
