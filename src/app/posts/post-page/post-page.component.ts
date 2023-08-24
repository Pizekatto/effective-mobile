import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Post } from '@app/models/Post'
import { PostService } from '../post.service'
import { Observable, switchMap } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostPageComponent {
  post: Observable<Post>

  constructor(private readonly route: ActivatedRoute, private postService: PostService) {
    this.post = this.route.params.pipe(switchMap(({ id }) => this.postService.getPost(Number(id))))
  }
}
