import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTicketComponent } from './buyTicket.component';

describe('MapComponent', () => {
  let component: BuyTicketComponent;
  let fixture: ComponentFixture<BuyTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
