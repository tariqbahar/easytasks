import { Component, EventEmitter, input, Input, Output } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.components.html',
  styleUrl: './task.components.css',
})
export class TaskComponents {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();
  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
