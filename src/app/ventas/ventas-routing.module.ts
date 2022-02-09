import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaClientesComponent } from './clientes/tabla-clientes/tabla-clientes.component';
import { InicioVentasComponent } from './inicio-ventas/inicio-ventas.component';

const routes: Routes = [
  {path: '', component: InicioVentasComponent}, // Esta ruta equivale a "/ventas"
  {path: 'tabla-clientes', component: TablaClientesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
