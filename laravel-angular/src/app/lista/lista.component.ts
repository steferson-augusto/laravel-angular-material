
import { Component, OnInit } from '@angular/core';
import {PessoaService, Pessoa} from '../pessoa.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  pessoas: Pessoa[];

  constructor(private pessoaService:PessoaService) { }

  ngOnInit() {
    this.pessoaService.getPessoas().subscribe(pessoa => {
      this.pessoas = pessoa;
      console.log(this.pessoas);
    });
  }

}
