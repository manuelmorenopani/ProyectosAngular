import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteQueenComponent } from './componente-queen/componente-queen.component';
import { ComponenteTypescriptComponent } from './componente-typescript/componente-typescript.component';
import { ComponenteFundamentosComponent } from './componente-fundamentos/componente-fundamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteQueenComponent,
    ComponenteTypescriptComponent,
    ComponenteFundamentosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
