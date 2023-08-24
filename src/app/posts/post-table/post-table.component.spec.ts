import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PostTableComponent } from './post-table.component'
import { DebugElement } from '@angular/core'
import { PostService } from '../post.service'
import { RouterTestingModule } from '@angular/router/testing'

describe('PostTableComponent', () => {
  let fixture: ComponentFixture<PostTableComponent>
  let comp: PostTableComponent
  let el: DebugElement
  let service: jasmine.SpyObj<PostService>

  beforeEach(() => {
    const spy = jasmine.createSpyObj('PostService', [], ['posts'])

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PostTableComponent],
      providers: [{ provide: PostService, useValue: spy }]
    })
    fixture = TestBed.createComponent(PostTableComponent)
    comp = fixture.componentInstance
    el = fixture.debugElement
    service = TestBed.inject(PostService) as jasmine.SpyObj<PostService>
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(comp).toBeDefined()
  })
})
