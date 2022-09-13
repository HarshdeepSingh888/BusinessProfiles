import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

const ALLOWED_USER = ['harsh', 'admin']

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onLogin(userName: string, password: string): void {
    if (ALLOWED_USER.includes(userName)) {
      localStorage.setItem('isLoggedIn', 'true')
      this.router.navigateByUrl('/profiles')
    }
  }
}
