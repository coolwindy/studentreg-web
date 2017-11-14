import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Student } from '../model/student';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterService {
    private registerUrl = environment.dataApiUrl + '/students';

    constructor(private http: HttpClient) {
    }

    register(student: string): Observable<Student> {
        return this.http.post<Student>(this.registerUrl, student, httpOptions);
    }
}

