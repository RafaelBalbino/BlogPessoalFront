import { Component, OnInit } from '@angular/core';
import { UserLogin } from './../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp:UserLogin) => {
      this.userLogin = resp
      this.router.navigate(["/inicio"])
      alert('Pode entrar!')
    })
  }
}
