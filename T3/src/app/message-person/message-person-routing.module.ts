import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagePersonPage } from './message-person.page';

const routes: Routes = [
  {
    path: '',
    component: MessagePersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagePersonPageRoutingModule {}
