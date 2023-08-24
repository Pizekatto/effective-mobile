import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PostsRoutingModule } from './posts-routing.module'
import { PostTableComponent } from './post-table/post-table.component'
import { HttpClientModule } from '@angular/common/http'
import { PostPageComponent } from './post-page/post-page.component'
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [PostTableComponent, PostPageComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class PostsModule {}
