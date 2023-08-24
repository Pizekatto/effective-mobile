import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PostTableComponent } from './post-table/post-table.component'
import { PostPageComponent } from './post-page/post-page.component'

const routes: Routes = [
  {
    path: '',
    component: PostTableComponent
  },
  {
    path: ':id',
    component: PostPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
