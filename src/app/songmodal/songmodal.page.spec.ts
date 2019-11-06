import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongmodalPage } from './songmodal.page';

describe('SongmodalPage', () => {
  let component: SongmodalPage;
  let fixture: ComponentFixture<SongmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
