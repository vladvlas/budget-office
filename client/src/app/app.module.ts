import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {TariffsComponent} from "./components/tariffs/tariffs.component";
import {CardComponent} from "./components/card/card.component";
import {BannerComponents} from "./components/banner/banner.components";
import {ReviewComponent} from "./components/review/review.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {FooterComponent} from "./components/footer/footer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TariffsComponent,
    CardComponent,
    BannerComponents,
    ReviewComponent,
    RegistrationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
