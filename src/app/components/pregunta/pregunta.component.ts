import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta } from '../../models/pregunta';
import { Respuesta } from '../../models/respuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css'],
})
export class PreguntaComponent implements OnInit {
  listaPregunta: Pregunta[];

  constructor(public preguntaService: PreguntaService) {}

  ngOnInit(): void {
    this.listaPregunta = this.preguntaService.getPreguntas();
  }

  obtenerPregunta() {
    return this.listaPregunta[this.preguntaService.indexPregunta].descripcion;
  }

  respuestaSeleccionada(respuesta: Respuesta, indexRespuesta: number) {
    if(this.preguntaService.pregConfirmada === true) {
      return;
    }
    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.deshabilitarBtn = false;
    this.preguntaService.indexRespuesta = indexRespuesta;
  }

  AddClassOption(respuesta: Respuesta) {
    // respuesta seleccionada y no esta confirmada
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      !this.preguntaService.pregConfirmada
    ) {
      return 'active text-light';
    }

    // respuesta correcta y esta confirmada
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.pregConfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 1
    ) {
      return 'list-group-item-success';
    }

    // respuesta incorrecta y esta confirmada
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.pregConfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 0
    ) {
      return 'list-group-item-danger';
    }
  }

  iconCorrecta(respuesta: Respuesta) {
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.pregConfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 1
    ) {
      return true;
    } else {
      return false;
    }
  }

  iconIncorrecta(respuesta: Respuesta) {
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.pregConfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}
