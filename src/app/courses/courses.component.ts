import { Intercurso } from './../intercurso';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {
  titulo: string = 'Lista de cursos';
  anchoImagen: string = '40px';

  @ViewChild('filtro', {static: false})
  filtro: ElementRef;
  private _textoFiltro: string = '';

  set textoFiltro(t: string) {
    console.log('textoFiltro',t);
    this._textoFiltro = t;
    //filtrar cursos
    this.cursos = t? this.filtrarCursos(t): this.cursosService.getCourses()
  }

  get textoFiltro() {
    return this._textoFiltro
  }

  cursos: Intercurso[];

  constructor(private router: Router, private cursosService: CoursesService) {
  }

  ngOnInit(): void {
       this.cursos = this.cursosService.getCourses();
  }

  ngAfterViewInit() {
    this.filtro.nativeElement.value = 'Angular';
  }

  filtrarCursos(texto: string){
    return this.cursos.filter((curso: Intercurso) => curso.name.toLowerCase().indexOf(texto.toLowerCase()) >= 0);
  }

  onEditCurso(curso: Intercurso){
    console.log('[Courses] Edit', curso);
     //redirección: course/{curso.id}
     this.router.navigate([`course/${curso.id}`]);
    

  }
  onDeleteCurso(curso: Intercurso){
    console.log('[Courses] Delete', curso);
    this.cursos = this.cursos.filter((c: Intercurso)=>{
      return c.id !== curso.id
    });
  }
}  

  
