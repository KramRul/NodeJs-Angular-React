import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddCategoryShopAdminRequestView } from 'src/app/shared/entities/shop-admin.views/requests/add-category-shop-admin.request.view';
import { ShopAdminService } from 'src/app/shared/services/shop-admin.service';
import { FormService } from 'src/app/shared/services/form.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { CategoryDto } from 'src/app/shared/dtos/categories/category-dto';

@Component({
  selector: 'app-add-category-page',
  templateUrl: './add-category-page.component.html',
  styleUrls: ['./add-category-page.component.scss']
})
export class AddCategoryPageComponent implements OnInit {
  public addCategoryForm: FormGroup;
  public addCategoryFormSubmitted: boolean = false;
  public modelRequest: AddCategoryShopAdminRequestView = new AddCategoryShopAdminRequestView();

  constructor(
    private shopAdminService: ShopAdminService,
    private formService: FormService,
    private router: Router,
    private notificationService: NotificationService) {
    this.initForm();
  }

  ngOnInit() {
  }

  private initForm(): void {
    this.addCategoryForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('')
    });
  }

  checkIfDisplayInputError(inputName: string): boolean {
    return this.formService.checkIfDisplayInputError(inputName, this.addCategoryFormSubmitted, this.addCategoryForm);
  }

  async addCategory() {
    if (!this.isReportFormValid()) {
      return;
    }
    this.addCategoryFormSubmitted = true;
    let addedCategory = await this.shopAdminService.addCategory(this.modelRequest).toPromise();
    if (addedCategory) {
      this.notificationService.showSuccess('Category successfully added');
      this.router.navigate(["/shop-client/list-products-page"]);
    } else {
      this.notificationService.showWarning('Category does not added');
      this.router.navigate(["/shop-client/list-products-page"]);
    }
    this.addCategoryFormSubmitted = false;
  }

  private isReportFormValid(): boolean {
    this.addCategoryFormSubmitted = true;
    if (!this.addCategoryForm.valid) {
      this.formService.resetFormInputs(this.addCategoryForm);
      this.notificationService.showError("Some fields are invalid");
      return false;
    }
    return true;
  }

  addSubCategory(){
    this.modelRequest.subcategories.push(new CategoryDto());
  }

  removeSubCategory(){
    this.modelRequest.subcategories.pop();
  }
}
