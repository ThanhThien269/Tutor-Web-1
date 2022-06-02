import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/user.service';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog : MatDialog,public auth: UserService) { }

  ngOnInit(): void {
  }

 public open(){
    this.dialog.open(SignUpComponent, { panelClass: 'custom-dialog-container' })
  }
  public openSI(){
    this.dialog.open(SignInComponent, { panelClass: 'custom-dialog-container' })
  }
}
