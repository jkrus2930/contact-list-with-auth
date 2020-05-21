import {Component, OnInit} from '@angular/core';
import {ContactModel} from '../../../model';
import {ContactsService} from '../../../_services/contacts.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {
  contact: ContactModel;

  constructor(private contactsService: ContactsService,
              private toast: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveContact(event) {
    this.contactsService.createContact(event).subscribe(
      (data) => {
        this.toast.success('Контакт созндан');
        this.router.navigate(['/contacts-list']);
      }
    );
  }

}
