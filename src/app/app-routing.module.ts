import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './liga/edit/edit.component';
import { LigaComponent } from './liga/liga.component';
import { WalletComponent } from './wallet/wallet/wallet.component';

const routes: Routes = [
  { path: '', redirectTo: '/liga', pathMatch: 'full' },
  { path: 'liga', component: LigaComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'liga/edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
