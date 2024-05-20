import { Component, OnInit } from '@angular/core';
import { Account } from '../../../models/account.model';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../../../services/accounts.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  account!: Account;
  id!: number;
  accountSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private accountsService: AccountsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { id } = params;
      this.id = +id;
      this.account = this.accountsService.getAccount(this.id);
    });

    this.accountSubscription = this.accountsService.accountsChanged.subscribe(
      (accounts: Account[]) => {
        this.account = accounts[this.id];
      }
    );
  }
}
