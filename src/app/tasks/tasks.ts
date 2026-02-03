import { Component, Input } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) name!: string;
}
