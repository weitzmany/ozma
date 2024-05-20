import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  url: string =
    'https://money-app-3d671-default-rtdb.europe-west1.firebasedatabase.app/';
  tables: { [name: string]: string } = {
    accounts: 'accounts.json',
    payments: 'payments.json',
  };

  constructor(private http: HttpClient) {}

  fetchData(table: string) {
    return this.http.get<Account[]>(this.url + this.tables[table]);
  }
}
