import { Injectable, OnInit } from '@angular/core';
import { Account } from '../models/account.model';
import { Subject, tap } from 'rxjs';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  table: string = 'accounts';
  accountsChanged = new Subject<Account[]>();
  accountsLoaded: boolean = false;

  private accounts: Account[] = [];

  constructor(private data: DataStorageService) {}

  private refresh() {
    this.accountsChanged.next(this.accounts.slice());
  }

  private save() {}

  private load() {
    this.data.fetchData(this.table).pipe(tap(
      accounts => {
        this.setAccounts(accounts);
      }
    )).subscribe();
  }

  getAccounts() {
    if (!this.accountsLoaded) {
      this.accountsLoaded = true;
      this.load();
    }

    return this.accounts.slice();
  }

  getAccount(index: number) {

    if (!this.accountsLoaded) {
      this.accountsLoaded = true;
      this.load();
    }

    return this.accounts[index];
  }

  addAccount(account: Account) {
    this.accounts.push(account);
    this.refresh();
  }

  updateAccount(index: number, newAccount: Account) {
    this.accounts[index] = newAccount;
    this.refresh();
  }

  deleteAccount(index: number) {
    this.accounts.splice(index, 1);
    this.refresh();
  }

  setAccounts(accounts: Account[]) {
    this.accounts = accounts;
    this.refresh();
  }
}
