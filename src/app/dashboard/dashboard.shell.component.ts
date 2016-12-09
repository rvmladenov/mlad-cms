import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'dashboard-shell',
  templateUrl: './dashboard.shell.component.html',
  styleUrls: ['./shell.scss']
})
export class DashboardShellComponent {

  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/auth');
  }
}
