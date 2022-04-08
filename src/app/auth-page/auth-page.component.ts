import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(private router: Router, private request: RequestsService) { }

  ngOnInit() {
    if(localStorage.getItem('access_token')) {
      this.router.navigate(['/main'])
    } else {
      this.router.navigate(['/'])
    }
  }

  goToPage() {
    localStorage.setItem('access_token', this.request.token)
    this.router.navigate(['/main'])
  }

}
