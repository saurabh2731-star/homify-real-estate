import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule ,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

   contactForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    const formData = this.contactForm.value;

    this.http.post('http://localhost:8080/api/contact', formData).subscribe({
      next: (response) => {
        alert('Thanks! Your message has been sent.');
        this.contactForm.reset();
        this.submitted = false;
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
      }
    });
  }
}
