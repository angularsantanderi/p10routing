import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { InicioVentasComponent } from './inicio-ventas/inicio-ventas.component';
import { TablaClientesComponent } from './clientes/tabla-clientes/tabla-clientes.component';


@NgModule({
  declarations: [
    InicioVentasComponent,
    TablaClientesComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
