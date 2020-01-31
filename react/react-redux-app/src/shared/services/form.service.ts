import { Injectable } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable()
export class FormService {
  constructor(private formBuilder: FormBuilder) { }

  public checkIfDisplayInputError(inputName: string, formSubmitted: boolean, form: FormGroup) {
    const input = form.get(inputName);
    const isDisplay = formSubmitted &&
      !input.touched &&
      input.status === 'INVALID';
    return isDisplay;
  }

  public checkIfDisplayGroupInputError(array: string, index: number, inputName: string, formSubmitted: boolean, form: FormGroup) {
    const formArray = <FormArray>form.get(array);
    const input = formArray.controls[index].get(inputName);
    const isDisplay = formSubmitted &&
      !input.touched &&
      input.status === 'INVALID';
    return isDisplay;
  }

  public getEmptyFormArray() {
    return this.formBuilder.array([]);
  }

  public getDynamicFormGroup(): FormGroup {
    return this.formBuilder.group({
      size: new FormControl(null, [Validators.required])
    });
  }

  public removeControls(controls: FormArray): void {
    for (let i = controls.length; i >= 0; i--) {
      controls.removeAt(i);
    }
  }

  public updateValidationValues(form: FormGroup) {
    const controls = form.controls;
    Object.keys(controls).forEach(key => {
      form.get(key).updateValueAndValidity();
    });
  }

  public resetFormInputs(form: FormGroup): void {
    const controls = form.controls;
    Object.keys(controls).forEach(key => {
      form.get(key).markAsUntouched();
    });
  }

}
