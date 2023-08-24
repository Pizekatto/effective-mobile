import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, map } from 'rxjs'
import { User } from '../models/User'
import { environment } from '@environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject: BehaviorSubject<User | null>
  public user: Observable<User | null>
  public get userValue(): User | null {
    return this.userSubject.value
  }

  constructor(private router: Router, private http: HttpClient) {
    const item = localStorage.getItem('user')
    const user = item ? JSON.parse(item) : null
    this.userSubject = new BehaviorSubject(user)
    this.user = this.userSubject.asObservable()
  }

  login(username: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password }).pipe(
      map(user => {
        localStorage.setItem('user', JSON.stringify(user))
        this.userSubject.next(user)
        return user
      })
    )
  }

  logout() {
    localStorage.removeItem('user')
    this.userSubject.next(null)
    this.router.navigate(['/account/login'])
  }
}
