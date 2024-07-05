import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @Output() toggle = new EventEmitter<void>();

  signup() {
    // Handle signup logic here
    console.log('Signup logic');
  }

  toggleForm() {
    // Emit toggle event
    this.toggle.emit();
  }
}
