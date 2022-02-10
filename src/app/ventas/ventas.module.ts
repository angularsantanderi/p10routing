import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { InicioVentasComponent } from './inicio-ventas/inicio-ventas.component';
import { TablaClientesComponent } from './clientes/tabla-clientes/tabla-clientes.component';
import { VisualizarClienteComponent } from './clientes/visualizar-cliente/visualizar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { FormsModule } from '@angular/forms';
import { CompartidoModule } from '../compartido/compartido.module';
import { ClientesService } from './clientes.service';


@NgModule({
  declarations: [
    InicioVentasComponent,
    TablaClientesComponent,
    VisualizarClienteComponent,
    CrearClienteComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    FormsModule,
    CompartidoModule
  ],
  providers: [
    ClientesService
  ]
})
export class VentasModule { }
