import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

   //var
   listaFotos 

   constructor(conexaoApi:HttpClient){
       var url = "http://localhost:3000/v1/fotos" ;
   
       //this dentro da function, escopo da funcao
       // conexaoApi.get(url).subscribe(function objetoApi(fotosApi ){
       //     //console.log(fotosApi)
       //     this.listaFotos = fotosApi
       //     console.log(this) // this is internal function
       // });
   
       //preserva o this da classe, escopo da classe
       conexaoApi.get(url).subscribe(
           fotosApi  =>{
       // (fotosApi ) =>{
          this.listaFotos = fotosApi
          // console.log(this) // this is internal function
       }, 
       // function(error){
       //     console.log(error);
       // }
   error =>{ // arrow function
       console.log(error);
   }
   
   );
   
   }
  ngOnInit() {
  }

}
