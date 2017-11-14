import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
    private loginUrl = environment.dataApiUrl + '/students/login';
    constructor(
        private http: HttpClient
    ) { }
    login(student: string): Observable<any> {
        return this.http.post(this.loginUrl, student, httpOptions);
    }
}
