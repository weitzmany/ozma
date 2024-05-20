import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../../../models/account.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accounts-list-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './accounts-list-item.component.html',
  styleUrl: './accounts-list-item.component.scss',
})
export class AccountsListItemComponent{
  @Input('accountInput') account!: Account;
  @Input('indexInput') index!: number;

}
