import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {ContactModel} from '../../../model';
import {ContactsService} from '../../../_services/contacts.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactEditComponent implements OnInit {
  contact: ContactModel;


  constructor(private activatedRoute: ActivatedRoute,
              private contactsService: ContactsService,
              private toast: ToastrService,
              private router: Router) { }

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

  saveContact(event){
    this.contactsService.updateContact(event).subscribe(
      (data) => {
        this.toast.success('Контакт сохранен');
        this.router.navigate(['/contacts-list']);
      }
    );
  }


}
