import { TestBed } from '@angular/core/testing'

import { PostService } from './post.service'

describe('PostService', () => {
  let service: jasmine.SpyObj<PostService>

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AccountService', ['getPost'], ['posts'])

    TestBed.configureTestingModule({ providers: [{ provide: PostService, useValue: spy }] })
    service = TestBed.inject(PostService) as jasmine.SpyObj<PostService>
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
