import { TestBed } from '@angular/core/testing';
import { NavVisibilityServiceService } from './nav-visibility-service.service';

describe('NavVisibilityServiceService', () => {
  let service: NavVisibilityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavVisibilityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
