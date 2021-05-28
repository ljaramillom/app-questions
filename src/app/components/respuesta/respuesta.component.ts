import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from '../../models/pregunta';
import { PreguntaService } from '../../services/pregunta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  listaPreguntas: Pregunta[] = [];
  respuestasUsuario: any;

  constructor(public preguntaService: PreguntaService,
              private router: Router,
    ) { }

  ngOnInit(): void {
    this.listaPreguntas = this.preguntaService.preguntas;
    this.respuestasUsuario = this.preguntaService.respuestasUsuario;
  }

  volver() {
    this.preguntaService.respuestasUsuario = [];
    this.router.navigate(['/']);
  }

}
