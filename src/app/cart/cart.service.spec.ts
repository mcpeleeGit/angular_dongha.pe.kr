import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartService ]
    })
    .compileComponents();
  });

  beforeEach(() => {

  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
