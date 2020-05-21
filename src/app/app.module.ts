import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './components/footer/footer.component';
import {RegisterComponent} from './components/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ContactsListComponent} from './components/contacts/contacts-list/contacts-list.component';
import {ContactsListResolveService} from './_resolvers/contact-list-resolver';
import {ContactDetailsComponent} from './components/contacts/contact-details/contact-details.component';
import {ContactResolveService} from './_resolvers/contact.resolver';
import {ContactEditComponent} from './components/contacts/contact-edit/contact-edit.component';
import {ContactFormComponent} from './components/contacts/contact-form/contact-form.component';
import {ContactNewComponent} from './components/contacts/contact-new/contact-new.component';
import {ErrorInterceptor} from './interceptor/errorinterceptor';
import {AuthenticationService} from './_services/authentication.service';
import {ContactsService} from './_services/contacts.service';
import {AuthGuard} from './_guard/auth.guard';
import {AuthHttpInterceptor} from './interceptor/authhttp.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ContactsListComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactFormComponent,
    ContactNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    ContactsService,
    AuthGuard,
    ContactResolveService,
    ContactsListResolveService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true},
    ContactsListResolveService,
    ContactResolveService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
