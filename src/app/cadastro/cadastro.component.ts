import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto = new FotoComponent()

  constructor(public conexaoAPi: HttpClient) { }

  ngOnInit() {
  }

  salvar() {
    
    console.log("salvou");
    console.log(this.foto);
    var url = "http://localhost:3000/v1/fotos";

    this.conexaoAPi.post(
      url,
      this.foto,
      {
        headers:  new HttpHeaders({'Content-Type': 'application/json'})
      }

    ).subscribe(
      success => { console.log('Funfou ' + success); }
      , error => {
        console.log('Shit ,error :' + error);
      }
    )

  }
}
