import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountsListItemComponent } from './accounts-list-item/accounts-list-item.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Account } from '../../../models/account.model';
import { AccountsService } from '../../../services/accounts.service';

@Component({
  selector: 'app-accounts-list',
  standalone: true,
  imports: [AccountsListItemComponent, CommonModule],
  templateUrl: './accounts-list.component.html',
  styleUrl: './accounts-list.component.scss',
})
export class AccountsListComponent implements OnInit, OnDestroy {
  private accountsSubscription!: Subscription;
  accounts: Account[] = [];

  constructor(private accountService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.getAccounts();
    this.accountsSubscription = this.accountService.accountsChanged.subscribe(
      (accounts: Account[]) => {
        this.accounts = accounts;
      }
    );
  }

  ngOnDestroy(): void {
    this.accountsSubscription.unsubscribe();
  }
}
