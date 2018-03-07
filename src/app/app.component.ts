import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Component({
selector:'app-root',
templateUrl:'./app.component.html',
styles:['h1{color:red; text-decoration:underline;background-color:yellow; }']
})
export class AppComponent{

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

}







//import { Component } from '@angular/core';





// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }
