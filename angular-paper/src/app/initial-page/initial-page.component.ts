import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  gotoHome() {
    this.router.navigate(['/hundredp']);  // define your component where you want to go
  }

}
