import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemPage2Page } from './item-page2.page';

const routes: Routes = [
  {
    path: '',
    component: ItemPage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemPage2PageRoutingModule {}
