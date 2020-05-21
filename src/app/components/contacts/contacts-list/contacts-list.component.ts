import {Component, OnInit} from '@angular/core';
import {ContactModel} from '../../../model';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ContactsService} from '../../../_services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: ContactModel[];

  contactsTrackByFn = (index: number, contact: ContactModel) => contact.id;

  constructor(private activatedRoute: ActivatedRoute,
              private contactsService: ContactsService,
              private toast: ToastrService) {
  }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(
        (data: Data) => {
          console.log(data);
          if (data.contacts.length) {
            this.contacts = data.contacts;
          }
        }
      );
  }

  removeContact(contact) {
    const conf = confirm('Вы действительно хотите удалить контакт ?');
    if (conf) {
      this.contactsService.removeContact(contact.id).subscribe(
        (data) => {
          this.toast.success('Контакт удален');
          this.updateContactList();
        }
      );
    }
  }

  updateContactList() {
    this.contactsService.getContacts().subscribe(response => {
      console.log(response);
      this.contacts = response;
    });
  }


}
