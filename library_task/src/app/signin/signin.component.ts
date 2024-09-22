import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errormsg: string='';
  showerror: boolean=false;


  ngOnInit(): void {
  }
  loginForm!: FormGroup;
  passwordVisible: boolean = false;

  constructor(private fb: FormBuilder,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    // Get form values
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
  
    if (email === 'demo' && password === 'demo') {
      this.router.navigate(['/dashboard']);
    } else {
      this.showerror = true;
      this.errormsg = 'Invalid username or password';
    }
  }
}
