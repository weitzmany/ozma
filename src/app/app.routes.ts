import { Routes } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { PaymentsComponent } from './components/payments/payments.component';

export const routes: Routes = [
    { path: '', redirectTo: '/accounts', pathMatch: 'full' },
    { path: 'accounts', loadChildren: () => import('./routes/accounts.routes').then(r => r.ACCOUNTS_ROUTES)},
    { path: 'payments', component: PaymentsComponent },
];
