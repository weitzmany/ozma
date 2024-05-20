import { AccountType } from "../enums/account-type";

export class Account {
    [x: string]: any;

    constructor(

        id: number,
        name: string,
        type: AccountType,
        balance: number,
        frame?: number,
        payment?: number,
        paymentDay?: number,
        interest?: number,
        website?: string,

    ){}

}
