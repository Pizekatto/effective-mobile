import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PostPageComponent } from './post-page.component'
import { DebugElement } from '@angular/core'
import { PostService } from '../post.service'
import { RouterTestingModule } from '@angular/router/testing'

describe('PostPageComponent', () => {
  let fixture: ComponentFixture<PostPageComponent>
  let comp: PostPageComponent
  let el: DebugElement
  let service: jasmine.SpyObj<PostService>

  beforeEach(() => {
    const spy = jasmine.createSpyObj('PostService', ['getPost'])

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PostPageComponent],
      providers: [{ provide: PostService, useValue: spy }]
    })
    fixture = TestBed.createComponent(PostPageComponent)
    comp = fixture.componentInstance
    el = fixture.debugElement
    service = TestBed.inject(PostService) as jasmine.SpyObj<PostService>
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(comp).toBeDefined()
  })
})
