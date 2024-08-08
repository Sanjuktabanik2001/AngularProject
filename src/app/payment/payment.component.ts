import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router
 
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
 
export class PaymentComponent {
  paymentForm: FormGroup;
 
  constructor(private fb: FormBuilder, private router:Router) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      cardHolderName: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.paymentForm.valid) {
      this.router.navigate(['/finalpage']);  // Navigate to gallery
    } else {
      this.router.navigate(['/payment']);  // Stay on payment page
    }
  }
}