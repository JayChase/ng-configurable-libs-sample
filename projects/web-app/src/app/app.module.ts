import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NormalLibModule } from 'projects/normal-lib/src/public-api';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NormalLibModule.forRoot({
      message: environment.normalMessage
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
