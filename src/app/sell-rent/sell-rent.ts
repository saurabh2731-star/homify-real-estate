import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule , Validators,FormBuilder,FormGroup, FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-sell-rent',
  imports: [CommonModule , ReactiveFormsModule , RouterModule ,HttpClientModule],
  templateUrl: './sell-rent.html',
  styleUrl: './sell-rent.css'
})
export class SellRent {
propertyForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.propertyForm = this.fb.group({
      ownerName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      title: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(1000)]],
      location: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    
    });
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.propertyForm.invalid) {
      return;
    }
    const formData =  this.propertyForm.value;
    this.http.post(`http://localhost:8080/api/properties/submit`, formData).subscribe({
      next: (response) => {
        alert('Your property has been submitted successfully!');
        this.propertyForm.reset();
        this.submitted = false;
      },
      error: (error) => {
        console.error('Error submitting property:', error);
        alert('There was an error submitting your property. Please try again later.');
        this.submitted = false;
      }
    });
  }
}