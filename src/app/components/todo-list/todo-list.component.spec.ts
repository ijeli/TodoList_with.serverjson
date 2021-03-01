import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoListComponent } from './todo-list.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ExpectedConditions } from 'protractor';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('inputTodo should initialize empty', () => {
    expect(component.inputTodo).toEqual('')
  })

  it('Component hidden when if user navigates to page without logging in', () => {
    expect(fixture.debugElement.query(By.css('#todoListEdit'))).toBeNull();
  })

  it('Component displays when user is logged in', () => {
    component.isLoggedin = true;
    fixture.detectChanges()
    // console.log(de.query(By.css('#todoListEdit')));
    expect(fixture.debugElement.query(By.css('#todoListEdit'))).not.toBeNull();
  })

});
