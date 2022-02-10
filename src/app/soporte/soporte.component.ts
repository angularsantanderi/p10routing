import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../ventas/clientes.service';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {

  // constructor(private clientesService: ClientesService) { } Error ya que ese servicio solo se puede usar en VentasModule
  constructor() { }

  ngOnInit(): void {
  }

}
