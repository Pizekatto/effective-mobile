import { ChangeDetectionStrategy, Component } from '@angular/core'
import { PostService } from '../post.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Post } from '@app/models/Post'

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostTableComponent {
  readonly posts = this.postService.posts
  displayedColumns = ['userId', 'id', 'title', 'body']

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService) {}

  navigateToPost(post: Post) {
    this.router.navigate([post.id], { relativeTo: this.route })
  }
}
