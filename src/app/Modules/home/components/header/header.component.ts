import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMenuItems = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openNavLink(divId: string): void {
    this.showMenuItems = false;
    this.router.navigate([''], { fragment: divId });
  }

}
