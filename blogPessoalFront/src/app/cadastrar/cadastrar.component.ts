import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string
  userLogin: UserLogin = new UserLogin

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  // Confirma a senha, comparando uma com a outra no formulário, recendo o valor do 'event'
  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoUsuario
    if(this.user.senha != this.confirmarSenha) {
      alert('A senha não coincide! Confirme sua senha novamente.')
    }
    else {
      this.authService.cadastrar(this.user).subscribe({
        next: (resp:User) => {
        this.user = resp
        this.router.navigate(["/entrar"])
        alert('Usuário cadastrado com sucesso!')
        },
      });
    }
  }
}
