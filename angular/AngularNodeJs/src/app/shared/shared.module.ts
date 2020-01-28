import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponentComponent } from './components/layout/sidebar-component/sidebar-component.component';
import { HeaderComponentComponent } from './components/layout/header-component/header-component.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { HttpTokenInterceptor } from './interceptors/http-token.interceptor';
import { LocalStorageService } from './services/local-storage.service';
import { LocalStorageKeyTypeDto } from './dtos/enums/local-storage-key-type-dto';
import { AccountService } from './services/account.service';
import { NotificationService } from './services/notification.service';
import { ShopAdminService } from './services/shop-admin.service';
import { ShopClientService } from './services/shop-client.service';
import { FormService } from './services/form.service';
import { UserHelper } from './helpers/user.helper';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    SidebarComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgSelectModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpTokenInterceptor,
    multi: true
  },
    LocalStorageService,
    LocalStorageKeyTypeDto,
    AccountService,
    NotificationService,
    ShopAdminService,
    ShopClientService,
    FormService,
    UserHelper
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    SidebarComponentComponent,
    HeaderComponentComponent,
    ToastrModule,
    NgSelectModule
  ]
})
export class SharedModule { }
