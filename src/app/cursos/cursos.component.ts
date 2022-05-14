import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public vetorCursos!:Curso[];
  public curso!:Curso; 
  public id!:number; 

  
  //costrutor
  constructor(private servico:CursosService) {}
  
  
  //inicialização
  ngOnInit() {
    this.id = -1;
    this.curso = new Curso();
    this.vetorCursos = this.servico.listar(); 

      }
          //cadastrar 
    cadastrar(){
      this.servico.cadastrar(this.curso);
      this.curso = new Curso(); 
    }
    
    excluir(id:number){
      this.servico.excluir(id);
      this.id = -1; 
    }

    editar(id:number){
      this.id = id;   

      this.curso = new Curso(
        this.vetorCursos[id].nomeCurso,
        this.vetorCursos[id].valorCurso,
        this.vetorCursos[id].areaCurso,
        ); 
      }
  
      atualizar(){
        this.servico.alterar(this.id, this.curso);
        this.curso = new Curso(); 
        this.id = -1;
      }


}
