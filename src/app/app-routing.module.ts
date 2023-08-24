import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { authGuard } from './helpers/auth.guard'
import { PostsModule } from './posts/posts.module'

const accountModule = () => import('./account/account.module').then(m => m.AccountModule)

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: accountModule
  },
  {
    path: 'posts',
    loadChildren: () => PostsModule,
    canActivate: [authGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
