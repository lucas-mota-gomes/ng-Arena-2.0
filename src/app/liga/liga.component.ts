import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss']
})
export class LigaComponent implements OnInit {
  currentTab = 0;
  currentTeam = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
