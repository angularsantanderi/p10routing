import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio-ventas',
  templateUrl: './inicio-ventas.component.html',
  styleUrls: ['./inicio-ventas.component.css']
})
export class InicioVentasComponent implements OnInit {

  titulo: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.titulo = data['titulo'])
  }

}
