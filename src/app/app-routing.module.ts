import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LigaComponent } from './liga/liga.component';

const routes: Routes = [
  { path: '', redirectTo: '/liga', pathMatch: 'full' },
  { path: 'liga', component: LigaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
