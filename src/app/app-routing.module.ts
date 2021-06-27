import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuyTicketComponent} from "./buyTicket/buyTicket.component";
import {TicketDetailsComponent} from "./ticketDetails/ticketDetails.component";


const routes: Routes = [
  { path: '' ,pathMatch: 'full', component: BuyTicketComponent
  },
  { path: 'buy', component: TicketDetailsComponent,  pathMatch: 'full' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
