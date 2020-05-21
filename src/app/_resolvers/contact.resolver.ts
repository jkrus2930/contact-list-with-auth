import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {ContactsService} from '../_services/contacts.service';
import {ContactModel} from '../model';

@Injectable()
export class ContactResolveService implements Resolve<ContactModel> {

  constructor(private contactsService: ContactsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ContactModel> {
    console.log('route.params', route.params);
    return this.contactsService.getContactById(route.params.id);
  }
}
