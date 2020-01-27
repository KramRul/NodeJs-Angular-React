import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShopAdminService } from 'src/app/shared/services/shop-admin.service';
import { AddProductShopAdminRequestView } from 'src/app/shared/entities/shop-admin.views/requests/add-product-shop-admin.request.view';
import { FormService } from 'src/app/shared/services/form.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent implements OnInit {
  public addProductForm: FormGroup;
  public addProductFormSubmitted: boolean = false;
  public modelRequest: AddProductShopAdminRequestView = new AddProductShopAdminRequestView();

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
    this.addProductForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      quantity: new FormControl('', [Validators.required, Validators.min(0)]),
      categories: new FormControl('', [Validators.required])
    });
  }

  checkIfDisplayInputError(inputName: string): boolean {
    return this.formService.checkIfDisplayInputError(inputName, this.addProductFormSubmitted, this.addProductForm);
  }

  async addProduct() {
    this.addProductFormSubmitted = true;
    let addedProduct = await this.shopAdminService.addProduct(this.modelRequest).toPromise();
    if (addedProduct) {
      this.notificationService.showSuccess('Product successfully added');
      this.router.navigate(["/shop-client/list-products-page"]);
    } else {
      this.notificationService.showWarning('Product does not added');
      this.router.navigate(["/shop-client/list-products-page"]);
    }
    this.addProductFormSubmitted = false;
  }
}
