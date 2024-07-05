import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() toggle = new EventEmitter<void>();

  login() {
    // Handle login logic here
    console.log('Login logic');
  }

  toggleForm() {
    // Emit toggle event
    this.toggle.emit();
  }
}
