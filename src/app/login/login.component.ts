import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Console } from '@angular/core/src/console';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [LoginService]
})

export class LoginComponent implements OnInit {
    constructor(private loginService: LoginService) {
    }

    ngOnInit() {

    }

    onSubmit(form: any): void {
        this.loginService.login(JSON.stringify(form))
            .subscribe(res => {
                console.log(res);
            });
    }
}
