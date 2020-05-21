import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {ContactModel} from '../../../model';
import {ContactsService} from '../../../_services/contacts.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact: ContactModel;

  constructor(private activatedRoute: ActivatedRoute,
              private contactsService: ContactsService,
              private toast: ToastrService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(
        (data: Data) => {
          console.log(data.contacts[0]);
          if (data.contacts[0]) {
            this.contact = data.contacts[0];
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
          this.router.navigate(['/contacts-list']);
        }
      );
    }
  }
}
