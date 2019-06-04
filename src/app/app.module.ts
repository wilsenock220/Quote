import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuoteDetailsComponent } from "./quote-details/quote-details.component";
import { QuoteComponent } from "./quote/quote.component";
import { QuoteFormComponent } from "./quote-form/quote-form.component";

import { UsersComponent } from "./users/users.component";
import { DetailsComponent } from "./details/details.component";

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailsComponent,
    QuoteComponent,
    QuoteFormComponent,
    UsersComponent,
    DetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
