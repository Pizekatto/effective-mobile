import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { AccountService } from '../account.service'
import { first } from 'rxjs'
import { ErrorStateMatcher } from '@angular/material/core'
import { environment } from '@environments/environment'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup
  loading = false
  submitted = false
  get f() {
    return this.form.controls
  }
  matcher = new MyErrorStateMatcher()
  user = environment.user

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {
    if (this.accountService.userValue) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true

    // stop here if form is invalid
    if (this.form.invalid) {
      return
    }

    this.loading = true
    this.accountService
      .login(this.f.username.value.trim(), this.f.password.value.trim())
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
          this.router.navigateByUrl(returnUrl)
        },
        error: error => {
          this.loading = false
        }
      })
  }
}
