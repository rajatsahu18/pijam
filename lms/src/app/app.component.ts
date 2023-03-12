import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home', background: 'warning', color:'light'},
    { title: 'Points earned', url: '/points', icon: 'trophy', background: 'danger', color:'light'},
    { title: 'Badges earned', url: '/badges', icon: 'ribbon', background: 'secondary', color:'light' },
    { title: 'CS courses for Teachers', url: '/courses', icon: 'desktop', background: 'primary', color:'light' },
  ];
  public labels = [
    { title: 'Open Labs', icon: 'flask'},
    { title: 'Hour of code', icon: 'hourglass'},
  ]
  constructor() {}
}
