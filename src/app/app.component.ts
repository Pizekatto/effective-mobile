import { ChangeDetectionStrategy, Component } from '@angular/core'
import { AccountService } from './account/account.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  user = this.accountService.user

  constructor(private accountService: AccountService) {}

  logout() {
    this.accountService.logout()
  }
}
