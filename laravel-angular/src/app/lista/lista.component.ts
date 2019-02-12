
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {PessoaService, Pessoa} from '../pessoa.service';

const PESSOAS: Pessoa[] = [
  {
    id:1,
    name:"Steferson Augusto Martins de Oliveira",
    cpf:"051.096.181-94",
    idade:22,
  },{
    id:2,
    name:"Bruce Wayne",
    cpf:"000.000.000-00",
    idade:40
  },{
    id:3,
    name:"Anthony Stark",
    cpf:"111.111.111-11",
    idade:0
  }];
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  pessoas: Pessoa[];
  dataSource: MatTableDataSource<Pessoa>;
  displayedColumns: string[] = ['id', 'name', 'cpf', 'idade'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private pessoaService:PessoaService) { }

  ngOnInit() {
    this.pessoaService.getPessoas().subscribe(pessoa => {
      this.pessoas = pessoa;
      console.log(this.pessoas);
      this.dataSource = new MatTableDataSource(this.pessoas);
    this.dataSource.sort = this.sort;
    });
    
    
  }

}
