import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Student } from '../model/student';

@Injectable()
export class CourseService {
    constructor(private http: HttpClient) {}

    getCourses(): Observable<Student[]> {
        return this.http.get<Student[]>(environment.dataApiUrl + '/students');
    }
}
