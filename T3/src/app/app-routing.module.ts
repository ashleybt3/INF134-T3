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
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
