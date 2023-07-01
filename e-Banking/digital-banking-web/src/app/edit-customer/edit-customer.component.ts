import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/customer.model";


declare let alert: any;
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerId! : string;
  customer!: Customer;
  editCustomerFormGroup! : FormGroup;
  errorMessage!: string;

  constructor(private fb : FormBuilder, private customerService:CustomerService,
              private router: Router, private route : ActivatedRoute
  ) { this.customer = router.getCurrentNavigation()?.extras.state as Customer }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    this.editCustomerFormGroup = this.fb.group({
      id : this.fb.control(this.customerId),
      name : this.fb.control(this.customer.name, [Validators.required, Validators.minLength(3)]),
      email : this.fb.control(this.customer.email, [Validators.required, Validators.email])
    })
  }

  handleEditCustomer() {
    let customer : Customer = this.editCustomerFormGroup.value;
    this.customerService.updateCustomer(customer).subscribe({
      next: () => {
        alert("Customer has been edited successfuly")
        this.router.navigateByUrl("/customers")
      },
      error: err => {
        this.errorMessage = err.message
      }
    })
  }
}
