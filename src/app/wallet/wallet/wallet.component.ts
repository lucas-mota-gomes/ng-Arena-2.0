import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  current = 0;
  depositTab = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
