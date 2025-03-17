import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  users$: Observable<any[]>;
  chart: any;

  constructor(private userService: UserService, private dialog: MatDialog) {
    this.users$ = this.userService.users$;
  }

  ngOnInit() {
    this.users$.subscribe(users => this.updateChart(users));
  }

  openUserForm() {
    import('../user-form/user-form.component').then(m => {
      this.dialog.open(m.UserFormComponent, {
        width: '400px'
      });
    });
  }


  updateChart(users: any[]) {
    const roleCounts: { Admin: number; Editor: number; Viewer: number } = { Admin: 0, Editor: 0, Viewer: 0 };
    users.forEach(user => {
      if (roleCounts.hasOwnProperty(user.role)) {
        roleCounts[user.role as keyof typeof roleCounts]++;
      }
    });

    if (this.chart) this.chart.destroy();
    this.chart = new Chart('userChart', {
      type: 'pie',
      data: {
        labels: Object.keys(roleCounts),
        datasets: [{ data: Object.values(roleCounts), backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'] }]
      }
    });
  }
}
