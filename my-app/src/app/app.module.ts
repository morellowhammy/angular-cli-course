import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchBoxDirective } from './search-box.directive';
import { InitCapsPipe } from './shared/init-caps.pipe';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SearchBoxDirective,
    InitCapsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
