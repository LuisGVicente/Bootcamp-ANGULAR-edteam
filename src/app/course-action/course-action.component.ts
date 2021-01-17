import { Curso } from './../curso';
import { Intercurso } from './../intercurso';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ed-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.css']
})
export class CourseActionComponent implements OnInit {

  @Input() curso: Intercurso;

  @Output() edit: EventEmitter<Curso> = new EventEmitter<Curso>();
  @Output() delete: EventEmitter<Curso> = new EventEmitter<Curso>();

  constructor() { }

  ngOnInit(): void {
  }
  editarCurso(curso: Intercurso) {
    console.log('Edit', curso);
    //Propagando el Objeto Curso hacia el componente padre
    this.edit.emit(curso);
  }
  eliminarCurso(curso: Intercurso) {
    console.log('Eliminar', curso);
    //Propagando el Objeto Curso hacia el componente padre
    this.delete.emit(curso);
  }
  onMouseover(event: any) {
    console.log('Mouse Over', event);
  }
  onDobleClick(event: any) {
    console.log('Doble Click', event);
  }
}

