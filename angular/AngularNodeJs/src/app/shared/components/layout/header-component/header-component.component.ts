import { Component, OnInit } from '@angular/core';
import { TokenHelper } from 'src/app/shared/helpers/token.helper';
import { UserHelper } from 'src/app/shared/helpers/user.helper';
import { UserDto } from 'src/app/shared/dtos/users/user-dto';
import { UserRoleTypeDto } from 'src/app/shared/dtos/enums/user-role-type-dto';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  public isUserLoggedIn: boolean = false;
  public isUserAdmin: boolean = false;
  public user: UserDto = new UserDto();

  constructor(private tokenHelper: TokenHelper,
    private userHelper: UserHelper) { }

  ngOnInit() {
    this.loadCurrentUser();
  }

  private loadCurrentUser(): void {
    this.tokenHelper.getTokenEmitter().subscribe(token => {
      if (token) {
        this.isUserLoggedIn = true;
      }
    });
    if (this.tokenHelper.isExist()) {
      this.isUserLoggedIn = true;
    }
    this.user = this.userHelper.getCurrentUser();
    debugger
    this.isUserAdmin = this.user.role === UserRoleTypeDto.Admin;
  }

  public logout(){
    this.tokenHelper.removeToken();
    this.userHelper.clearCurrentUser();
    this.isUserLoggedIn = false;
  }
}
