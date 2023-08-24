import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginComponent } from './login.component'
import { DebugElement } from '@angular/core'
import { AccountService } from '../account.service'
import { RouterTestingModule } from '@angular/router/testing'
import { FormBuilder } from '@angular/forms'

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>
  let comp: LoginComponent
  let el: DebugElement
  let service: jasmine.SpyObj<AccountService>

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AccountService', ['login'], ['userValue'])

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [FormBuilder, { provide: AccountService, useValue: spy }],
      declarations: [LoginComponent]
    })
    fixture = TestBed.createComponent(LoginComponent)
    comp = fixture.componentInstance
    el = fixture.debugElement
    service = TestBed.inject(AccountService) as jasmine.SpyObj<AccountService>
  })

  it('should create', () => {
    expect(comp).toBeDefined()
  })
})
