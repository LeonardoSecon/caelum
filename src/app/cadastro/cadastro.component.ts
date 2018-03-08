import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
foto = new FotoComponent()

  constructor( public conexaoAPi:HttpClient) { }

  ngOnInit() {
  }

  salvar(evento:Event){
    evento.preventDefault()
    console.log("salvou");
    console.log(this.foto);
    
   // this.conexaoAPi.post()


  }

}
