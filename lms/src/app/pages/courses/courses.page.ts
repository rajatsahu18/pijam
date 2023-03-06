import { Component } from '@angular/core';
import { CoursesDataService } from 'src/app/course-data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})

export class CoursesPage {
  title = "CS Fundamentals";
  courses:any;
  constructor(private courseData:CoursesDataService)
  {
    this.courseData.courses().subscribe((data) => {
      console.log(data);
      this.courses=data;
    })
  }
}

