import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/shared/services/account.service';
import { FormService } from 'src/app/shared/services/form.service';
import { RegisterAccountRequestView } from 'src/app/shared/entities/account.views/requests/register-account.request.view';
import { Router } from '@angular/router';
import { TokenHelper } from 'src/app/shared/helpers/token.helper';
import { UserHelper } from 'src/app/shared/helpers/user.helper';
import { UserDto } from 'src/app/shared/dtos/users/user-dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public registerFormSubmitted: boolean = false;
  public modelRequest: RegisterAccountRequestView = new RegisterAccountRequestView();

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
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      address: new FormControl(''),
      telephone: new FormControl('')
    });
  }

  checkIfDisplayInputError(inputName: string): boolean {
    return this.formService.checkIfDisplayInputError(inputName, this.registerFormSubmitted, this.registerForm);
  }

  async register(){
    this.registerFormSubmitted = true;
    let registeredUser = await this.accountService.register(this.modelRequest).toPromise();
    if (registeredUser) {
      let result = await this.accountService.login(this.modelRequest).toPromise();
      if (result && result.token) {
        let model = new UserDto();
        model._id = result.user._id;
        model.name = result.user.name;
        model.address = result.user.address;
        model.telephone = result.user.telephone;
        model.role = Number.parseInt(result.user.role);
        this.tokenHelper.setToken(result.token);
        this.userHelper.setCurrentUser(model);
        this.tokenHelper.tokenOutputEmit.emit(result.token);
        this.router.navigate(["/shop-client/list-products-page"]);
      } else {
        this.router.navigate(["/account/access-denied-page"]);
      }
    } else {
      this.router.navigate(["/account/access-denied-page"]);
    }
    this.registerFormSubmitted = false;
  }
}
