import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from 'src/app/shared/services/form.service';
import { LoginAccountRequestView } from 'src/app/shared/entities/account.views/requests/login-account.request.view';
import { TokenHelper } from 'src/app/shared/helpers/token.helper';
import { Router } from '@angular/router';
import { UserHelper } from 'src/app/shared/helpers/user.helper';
import { UserDto } from 'src/app/shared/dtos/users/user-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loginFormSubmitted: boolean = false;
  public modelRequest: LoginAccountRequestView = new LoginAccountRequestView();

  constructor(
    private accountService: AccountService,
    private formService: FormService,
    private tokenHelper: TokenHelper,
    private userHelper: UserHelper,
    private router: Router) {
    this.initForm();
   }

  ngOnInit() {
  }

  private initForm(): void {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  checkIfDisplayInputError(inputName: string): boolean {
    return this.formService.checkIfDisplayInputError(inputName, this.loginFormSubmitted, this.loginForm);
  }

  async login(){
    this.loginFormSubmitted = true;
    let result = await this.accountService.login(this.modelRequest).toPromise();
    if (result && result.token) {
      let model = new UserDto();
      model._id = result.user._id;
      model.name = result.user.name;
      model.address = result.user.address;
      model.telephone = result.user.telephone;
      this.tokenHelper.setToken(result.token);
      this.userHelper.setCurrentUser(model);
      this.tokenHelper.tokenOutputEmit.emit(result.token);
      this.router.navigate(["/shop-client/list-products-page"]);
    } else {
      this.router.navigate(["/account/access-denied-page"]);
    }
    this.loginFormSubmitted = false;
  }
}
