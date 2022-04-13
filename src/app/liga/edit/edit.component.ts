import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  submenu = 0;
  ativoAtual = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
