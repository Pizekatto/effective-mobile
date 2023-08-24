import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { AccountService } from './account/account.service'
import { DebugElement } from '@angular/core'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let comp: AppComponent
  let el: DebugElement
  let service: jasmine.SpyObj<AccountService>

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AccountService', ['logout'], ['user'])

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: AccountService, useValue: spy }],
      declarations: [AppComponent]
    })
    fixture = TestBed.createComponent(AppComponent)
    comp = fixture.componentInstance
    el = fixture.debugElement
    service = TestBed.inject(AccountService) as jasmine.SpyObj<AccountService>
  })

  it('should create the app', () => {
    expect(comp).toBeDefined()
  })
})
