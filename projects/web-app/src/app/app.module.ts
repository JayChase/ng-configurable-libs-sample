import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NormalLibModule } from 'normal-lib';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NormalLibModule.forRoot({
      message: environment.message
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
