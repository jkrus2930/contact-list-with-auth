import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ContactsService} from '../_services/contacts.service';

@Injectable()
export class ContactsListResolveService implements Resolve<any> {

  constructor(private contactsService: ContactsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.contactsService.getContacts();
  }
}
