import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Post } from '@app/models/Post'
import { Observable, catchError, map, shareReplay, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Observable<Post[]>

  constructor(private http: HttpClient) {
    this.posts = this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(shareReplay(1), catchError(this.handleError))
  }

  getPost(id: number) {
    return this.posts.pipe(map(data => data.find(elem => elem.id === id) as Post))
  }

  handleError(error: any) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    window.alert(errorMessage)
    return throwError(() => errorMessage)
  }
}
