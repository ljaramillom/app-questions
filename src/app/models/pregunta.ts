import { Respuesta } from './respuesta';
export class Pregunta {
    descripcion: string;
    respuestas: Respuesta[];

    constructor(descripcion: string, respuesta: Respuesta[]) {
        this.descripcion = descripcion;
        this.respuestas = respuesta;
    }
}