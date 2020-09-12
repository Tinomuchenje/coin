import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private formBuilder: FormBuilder) { }
  accountDetailsForm = this.formBuilder.group({
    name: [''],
    bank: [''],
    accountNumber: [''],
    branchCode: [''],
    phoneNumber: [''],
    email: ['']
  });

  get name(){
    return this.accountDetailsForm.get('name');
  }

  get bank(){
    return this.accountDetailsForm.get('bank');
  }

  get accountNumber() {
    return this.accountDetailsForm.get('accountNumber');
  }

  get branchCode(){
    return this.accountDetailsForm.get('branchCode');
  }
  get phoneNumber(){
    return this.accountDetailsForm.get('phoneNumber');
  }
  get email() {
    return this.accountDetailsForm.get('email');
  }

  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required'}
    ],
  };

  save(){
    console.log(this.accountDetailsForm);
  }
}
