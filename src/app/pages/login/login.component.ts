import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../Services/main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    emailId: '',
    password: '',
  };

  mainService = inject(MainService);
  router = inject(Router)

  loginMe() {
    this.mainService.login(this.loginObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        localStorage.setItem('ticektUser', JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      }
      else {
         debugger;
        alert(res.message)
      }
    })
  }
}
