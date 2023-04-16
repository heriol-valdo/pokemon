import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './AuthentificationService';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.componet.html',
 
})
export class LoginComponent implements OnInit {

  error = false;

  monFormulaire: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder, 
   
    
  ) { 

    this.monFormulaire = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
     
    
    });
  }

  ngOnInit(): void {


    
  }

  onSubmit(): void {
    this.authService.login(this.monFormulaire.get('username')?.value, this.monFormulaire.get('password')?.value,).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/pokemon/auth']);
        } else {
         // this.router.navigate(['/pokemon/auth']);
          this.error = true;
        }
      }
    );
  }

}