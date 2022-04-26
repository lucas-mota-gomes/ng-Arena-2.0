import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-arena';
  totalEstimate = 10;
  ctx = { estimate: this.totalEstimate };
  teste = ["1", "2", "3", "4"]
  myContext = {$implicit: 'World', localSk: 'Svet'};
}
