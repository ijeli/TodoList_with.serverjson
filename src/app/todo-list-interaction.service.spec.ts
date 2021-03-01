import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TodoListInteractionService } from './todo-list-interaction.service';

describe('TodoListInteractionService', () => {
  let service: TodoListInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TodoListInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
