import { Routes } from '@angular/router';
import { AccountDefaultComponent } from '../components/accounts/account/account-default/account-default.component';
import { AccountNewComponent } from '../components/accounts/account/account-new/account-new.component';
import { AccountComponent } from '../components/accounts/account/account.component';
import { AccountEditComponent } from '../components/accounts/account/account-edit/account-edit.component';
import { AccountsComponent } from '../components/accounts/accounts.component';

export const ACCOUNTS_ROUTES: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [
        {path: '',
        component: AccountDefaultComponent},
      { path: 'new', component: AccountNewComponent },
      {
        path: ':id',
        component: AccountComponent,
        children: [{ path: 'edit', component: AccountEditComponent }],
      },
    ],
  },
];
