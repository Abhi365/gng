import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked,OnDestroy {
  showAdminNavigation: boolean;
  dropdownOpen: boolean;
  constructor(private _router:Router) {
    this.showAdminNavigation = false;
    this.dropdownOpen=false;
  }

  ngOnInit() {
    this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    $('#adminElem').hover(
      () => {
        $('.nav-vertical-submenu').addClass('active');
      },
      () => {
        $('.nav-vertical-submenu').removeClass('active');
      }
    );
    $('#activeAdmin').hover(
      () => {
        $('.nav-vertical-submenu').addClass('active');
      },
      () => {
        $('.nav-vertical-submenu').removeClass('active');
      }
    );
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  ngAfterViewChecked() {
// window.scrollTo(0, 0);
}

  changeNavigation() {
    this.showAdminNavigation = true;
  }
  
  dropdownstatus() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  menuMobileToggle() {
    $('.navbar-toggler').toggleClass("opentime closedtime");
  }
}