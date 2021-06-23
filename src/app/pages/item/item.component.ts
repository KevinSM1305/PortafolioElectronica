import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../Interfaces/producto-description.interface';
import { Producto } from '../../Interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productos!: ProductoDescripcion;
  id!: string;

  constructor( private route: ActivatedRoute,
               public productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( parametros =>{

        //console.log(parametros['id']);

        this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            this.id = parametros['id'];
            this.productos = producto;
            //console.log(producto);           
          });

      });
  }

}
