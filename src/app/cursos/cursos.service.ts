import { Injectable } from '@angular/core';
import { Curso } from './Curso';


//acesso total do serviço
@Injectable({
  providedIn: 'root'
})

//classe
export class CursosService {

  constructor() { }

//vetor de cursos 
public vetorCursos:Curso[] = [
  new Curso("angular", 800, "desenvolvimento"),
  new Curso("PHP", 590, "desenvolvimento"),
  new Curso("Photoshop", 470, "Design")
];

//cadastro de cursos 
public cadastrar(curso:Curso){
  this.vetorCursos.push(curso);
}

//seleção de cursos 
public listar(){
  return this.vetorCursos; 
}

//alteração de cursos 
public alterar(id:number, curso:Curso){
  this.vetorCursos[id] = curso; 
}

//exclusão d cursos
public excluir(id:number){
  this.vetorCursos.splice(id, 1);
}

}
