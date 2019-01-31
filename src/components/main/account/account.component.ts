import { Component, OnInit } from '@angular/core';
import './account.component.scss';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  private accounts: any = [];
  private cards: any = [];
  private cardSelected: any;


  constructor(
    public accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.getAccount().subscribe((data) => {
      if (data.length) {
        this.accounts = data.response;
      }
      this.accounts = [{
        name: 'Tarjeta Oro',
        type: 'TDC',
        deposits: 100,
        withdrawals: 50,
        balance: 30
      }];
      console.log(this.accounts);
    });

    this.accountService.getCards().subscribe((data) => {
      if (data.response) {
        this.cards = data.response.type_cards;
      }
    });

  }


  onCardSelected(event) {
    console.log(event); // option value will be sent as event
    console.log('cardSelected: %o', this.cardSelected);
  }

  private createAccount() {
    if (this.cardSelected) {
      const type = this.cardSelected;
      const card = this.cards.find(item => {
        return item.type === type;
      });

      this.accountService.createAccount(type, card.name).subscribe((response) => {
        if (response) {
          alert('Cuenta creada');
        }
      });
    }
  }
}
