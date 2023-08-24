import { TestBed } from '@angular/core/testing'

import { AccountService } from './account.service'

describe('AccountService', () => {
  let service: jasmine.SpyObj<AccountService>

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AccountService', ['login', 'logout'], ['userSubject', 'user', 'userValue'])

    TestBed.configureTestingModule({
      providers: [{ provide: AccountService, useValue: spy }]
    })
    service = TestBed.inject(AccountService) as jasmine.SpyObj<AccountService>
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
