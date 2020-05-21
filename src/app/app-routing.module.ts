import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './_guard/auth.guard';
import {RegisterComponent} from './components/register/register.component';
import {ContactsListComponent} from './components/contacts/contacts-list/contacts-list.component';
import {ContactsListResolveService} from './_resolvers/contact-list-resolver';
import {ContactResolveService} from './_resolvers/contact.resolver';
import {ContactDetailsComponent} from './components/contacts/contact-details/contact-details.component';
import {ContactEditComponent} from './components/contacts/contact-edit/contact-edit.component';
import {ContactNewComponent} from './components/contacts/contact-new/contact-new.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'contacts-list',
        component: ContactsListComponent,
        resolve: {
          contacts: ContactsListResolveService
        }
      },
      {
        path: 'contact-new',
        component: ContactNewComponent
      },
      {
        path: 'contacts-details/:id',
        component: ContactDetailsComponent,
        resolve: {
          contacts: ContactResolveService
        }
      },
      {
        path: 'contact-edit/:id',
        component: ContactEditComponent,
        resolve: {
          contacts: ContactResolveService
        }
      }

    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Авторизация'}
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {title: 'Регистрация'}
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
