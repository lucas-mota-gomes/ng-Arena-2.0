import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LigaComponent } from './liga/liga.component';
import { EditComponent } from './liga/edit/edit.component';
import { WalletComponent } from './wallet/wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    LigaComponent,
    EditComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
