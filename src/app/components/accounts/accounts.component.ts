import { Component } from '@angular/core';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [AccountsListComponent, RouterModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss',
})
export class AccountsComponent  {
  
}
