import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../model/userModel';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: UserModel;
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthenticationService,
              private toastr: ToastrService) {
  }

  get registerFormFields() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.user = Object.assign({}, this.registerForm.value);
    this.authService.register(this.user).subscribe(() => {
      this.toastr.success('Регистрация прошла успешно');
      this.router.navigateByUrl('contacts');
    });
  }


  password(formGroup: FormGroup) {
    const password = formGroup.controls['password'];
    const confirmPassword = formGroup.controls['confirmPassword'];

    if (confirmPassword.errors && !confirmPassword.errors.mustMatch) {
      return;
    }

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({mustMatch: true});
    } else {
      confirmPassword.setErrors(null);
    }
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.password.bind(this)
    });
  }

}
