
import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'noticias';

  listNoticias: any[]= [] ;
  loading : boolean = false

  constructor(private _noticiaService:NoticiaService){

  }


  ngOnInit():void{}


buscarNoticias(parametros:any){
  this.loading = true;
console.log('soy el padre'),
console.log(parametros)

this._noticiaService.getNoticias(parametros).subscribe(data =>{
  this.loading = false;
  this.listNoticias = data.articles;
  
}
)
}
}
