import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
  signal,
} from '@angular/core';
import { type Users } from './user.model';
import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// interface Users {
//   id: string;
//   avatar: string;
//   name: string;
// }
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: Users;
  @Input({ required: true }) selected!: boolean;
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'users/' + this.selectedUser().avatar);
  // // get imagePath() {
  // //   return 'users/' + this.selectedUser.avatar;
  // // }
  // onSelectedUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
  //signal
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };

  @Output() select = new EventEmitter<string>();

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  //input function way
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'users/' + this.avatar();
  // });

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
