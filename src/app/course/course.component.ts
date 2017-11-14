import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Student } from '../model/student';

@Component ({
    selector: 'app-course',
    templateUrl: './course.component.html',
    providers: [CourseService]
})

export class CourseComponent implements OnInit {
    private students: Student[];
    constructor(private courseService: CourseService
    ) {}

    ngOnInit() {
        this.courseService.getCourses().subscribe(students => this.students = students);
    }
}
