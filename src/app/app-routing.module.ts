import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'post-page',
    loadChildren: () => import('./post-page/post-page.module').then( m => m.PostPagePageModule)
  },
  {
    path: 'message-person',
    loadChildren: () => import('./message-person/message-person.module').then( m => m.MessagePersonPageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./modals/my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },

  {path: 'item-page',
    loadChildren: () => import('./item-page/item-page.module').then( m => m.ItemPageModule)
  },
  {
    path: 'item-page2',
    loadChildren: () => import('./item-page2/item-page2.module').then( m => m.ItemPage2PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
