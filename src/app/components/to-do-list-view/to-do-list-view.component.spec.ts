import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ToDoListViewComponent } from './to-do-list-view.component';
import { By } from '@angular/platform-browser';


describe('ToDoListViewComponent', () => {
  let component: ToDoListViewComponent;
  let fixture: ComponentFixture<ToDoListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListViewComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Component hidden when if user navigates to page without logging in', () => {
    expect(fixture.debugElement.query(By.css('#todoListView'))).toBeNull();
  })

  it('Component displays when user is logged in', () => {
    component.isLoggedin = true;
    fixture.detectChanges()
    // console.log(de.query(By.css('#todoListEdit')));
    expect(fixture.debugElement.query(By.css('#todoListView'))).not.toBeNull();
  })
});
