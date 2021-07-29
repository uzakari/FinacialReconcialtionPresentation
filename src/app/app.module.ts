import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FileModule } from './file/file.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth/auth-button.component';


@NgModule({
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'dev-igue0cn6.us.auth0.com',
      clientId: 'Fq0BYmEH8b9ZdmvKZsFAT7G3HemTljIM'
    }),
    CommonModule,
    AppRoutingModule,
    CoreModule,
    FileModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent, AuthButtonComponent],
  bootstrap: [AppComponent]


})
export class AppModule { }
