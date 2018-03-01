import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existing-users',
  templateUrl: './existing-users.component.html',
  styleUrls: ['./existing-users.component.css']
})
export class ExistingUsersComponent implements OnInit {

  searchUserResult:boolean=false;
  isClientActive:boolean=false;
  searchUserName:string='';

  constructor() { }

  ngOnInit() {
  }

  searchUser() {
    this.searchUserResult=true;
  }
  saveUserDetails(){
    
  }

  reset(){
  this.searchUserName='';
  this.searchUserResult=false;
  }


}
