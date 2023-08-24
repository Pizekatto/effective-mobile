import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'
import { inject } from '@angular/core'
import { AccountService } from '@app/account/account.service'

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const accountService = inject(AccountService)
  const router = inject(Router)
  const user = accountService.userValue
  if (user) {
    return true
  }
  router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } })
  return false
}
