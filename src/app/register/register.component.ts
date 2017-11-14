import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { Student } from '../model/student';

@Component ({
    selector: 'app-register',
    templateUrl: './register.component.html',
    providers: [RegisterService]
})

export class RegisterComponent implements OnInit {
    private student: Student;
    constructor(private registerService: RegisterService,
        private router: Router
    ) {}

    ngOnInit() {
        this.student = new Student();
    }

    register(form: any) {
        this.registerService.register(JSON.stringify(form)).subscribe(() => { this.router.navigateByUrl('/course'); });
    }

}
