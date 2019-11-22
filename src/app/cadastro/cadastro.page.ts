import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router";

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.page.html',
	styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

	 email: string;
	 senha: string;
	 matricula: string;
	 nome: string;
	 confirmacaoSenha: string;

	constructor(public authService: AuthService,
	            public router: Router) {
	}

	ngOnInit() {
	}

	async registrar() {
		if (this.senha === this.confirmacaoSenha) {
			const token = await this.authService.register(this.email, this.senha, this.matricula, this.nome);
			if(token){
				this.router.navigate(['login'])
			}
		}
	}
}
