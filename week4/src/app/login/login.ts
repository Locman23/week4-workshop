import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';     // ⬅️ needed for *ngIf, |json, etc.
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],             // ⬅️ include CommonModule
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  model = { email: '', password: '' };
  error = '';

  private users = [
    { email: 'alice@example.com',   password: 'letmein' },
    { email: 'bob@example.com',     password: 'opensesame' },
    { email: 'charlie@example.com', password: 'password123' }
  ];

  constructor(private router: Router) {}

  login() {
    console.log('login() called with', this.model);   // ⬅️ debug: confirm it fires

    const ok = this.users.some(u =>
      u.email.trim().toLowerCase() === this.model.email.trim().toLowerCase() &&
      u.password === this.model.password
    );

    if (ok) {
      this.error = '';
      this.router.navigate(['/profile']);
    } else {
      this.error = 'Invalid email or password.';      // ⬅️ should now render with *ngIf
    }
  }
}
