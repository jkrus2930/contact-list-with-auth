import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: any;


  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(x => this.currentUser = x);

  }
}

