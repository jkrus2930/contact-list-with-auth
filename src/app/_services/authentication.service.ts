import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {UserModel} from '../model/userModel';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  protected basePath = environment.basePath;

  currentUserSubject: BehaviorSubject<any>;
  currentUser: Observable<UserModel>;
  jwtHelper = new JwtHelperService();

  constructor(private httpClient: HttpClient,
              private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  register(user: UserModel): Observable<any> {
    return this.httpClient.post<any>(`${this.basePath}/register`,
      user
    );
  }

  login(userName: string, pass: string) {
    const user = {
      email: userName,
      password: pass
    };
    return this.httpClient.post<any>(`${this.basePath}/login`,
      user
    ).pipe(
      map((response: any) => {
        if (!this.currentUserSubject.value) {
          this.currentUserSubject.next(response);
          localStorage.setItem('currentUser', JSON.stringify(response.accessToken));
          this.router.navigate(['/contacts-list']);
        }
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem('currentUser');
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
  }


  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
