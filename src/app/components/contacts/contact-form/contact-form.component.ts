import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ContactModel } from '../../../model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() contact: any = {};
  @Output() saveContactForm = new EventEmitter<ContactModel>();

  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    if (!this.contact.id) {
      this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required]
      });
    } else {
      this.contactForm = this.formBuilder.group({
        id: [this.contact.id],
        name: [this.contact.name, Validators.required],
        email: [this.contact.email, Validators.required],
        phone: [this.contact.phone]
      });
    }
  }

  get contactFormFields() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.saveContactForm.emit(this.contactForm.value);
  }

}
