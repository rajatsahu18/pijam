import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home'  },
    { title: 'Total points earned', url: '/points', icon: 'trophy' },
    { title: 'Total badges earned', url: '/badges', icon: 'ribbon' },
    { title: 'CS courses for Teachers', url: '/courses', icon: 'desktop' },
  ];
  public labels = ['Open Lab', 'Hour of Code'];
  constructor() {}
}
