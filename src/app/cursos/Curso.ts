//classe 

export class Curso{

//atributos 
public nomeCurso: string; 
public valorCurso: number; 
public areaCurso: string;

constructor(nome?: string, valor?: number, area?: string){
    this.nomeCurso = nome || ''; 
    this.valorCurso = valor || 0; 
    this.areaCurso = area || '';
}
}

// constructor(nome:string, valor:number, area:string){
//     this.nomeCurso = nome; 
//     this.valorCurso = valor0; 
//     this.areaCurso = area || ''; 