import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(userinfo:any) {
        return this.http.post('http://localhost:3000/user/authenticate', userinfo, this.jwt())
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user.username)
                if (user.username!="" && user.password!="") {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    console.log('user found');
                    localStorage.setItem('currentUser', JSON.stringify(user));
                } else {
					localStorage.removeItem('currentUser');
                	console.log('No user found');
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    
    
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}