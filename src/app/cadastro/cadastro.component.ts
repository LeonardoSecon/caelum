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

  salvar(evento: Event) {
    evento.preventDefault()
    console.log("salvou");
    console.log(this.foto);
    var url = "http://localhost:3000/v1/fotos";

    let cabecalho = new HttpHeaders()
    cabecalho.append('Content-Type', 'application/json')

    this.conexaoAPi.post(
      url,
      this.foto,
      {
        headers: cabecalho
      }

    ).subscribe(
      success => { console.log('Funfou ' + success); }
      , error => {
        console.log('Shit ,error :' + error);
      }
    )

  }
}
