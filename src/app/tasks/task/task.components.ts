import { Component, EventEmitter, inject, input, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.components.html',
  styleUrl: './task.components.css',
})
export class TaskComponents {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
