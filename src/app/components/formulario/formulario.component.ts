import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
 @Output()  parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'ar';

  categorias:any[]= 
  [
    {value:'general',nombre:'General'},
    {value:'business',nombre:'Negocios'}, 
    {value:'entertainment',nombre:'Entretenimiento'}, 
    {value:'health',nombre:'Salud'}, 
    {value:'science',nombre:'Ciencia'}, 
    {value:'sport',nombre:'Deportes'}, 
    {value:'technology',nombre:'Tecnología'}, 
];

paises:any[]=
[
  
  {value:'ar',nombre:'Argentina'}, 
  {value:'br',nombre:'Brasil'},
  {value:'fr',nombre:'Francia'},
  {value:'hu',nombre:'Hungria'},
  {value:'mx',nombre:'Mexico'},
  {value:'gb',nombre:'Reino Unido'},
  {value:'sp',nombre:'España'},
  {value:'ae',nombre:'Emiratos Árabes Unidos'},
  {value:'au',nombre:'Australia'},
  {value:'be',nombre:'Bélgica'},
  {value:'ca',nombre:'Canada'},
  {value:'cn',nombre:'China'},
  {value:'co',nombre:'Colombia'},
  {value:'cu',nombre:'Cuba'},
  {value:'de',nombre:'Alemania'},
  {value:'ie',nombre:'Irlanda'},
  {value:'il',nombre:'Israel'},
  {value:'in',nombre:'India'},
  {value:'it',nombre:'Italia'},
  {value:'jp',nombre:'Japón'},
  {value:'ma',nombre:'Marruecos'},
  {value:'ph',nombre:'Filipinas'},
  {value:'pl',nombre:'Polonia'},
  {value:'pt',nombre:'Portugal'},
  {value:'us',nombre:'EE.UU'},
  {value:'ve',nombre:'Venezuela'},

]

  constructor(){
   
  }


  ngOnInit(): void {
    
  }

buscarNoticia(){
 
  const PARAMETROS = {
    categoria: this.categoriaSeleccionada,
    pais: this.paisSeleccionado
  }

  this.parametrosSeleccionados.emit(PARAMETROS)
}
  

}
