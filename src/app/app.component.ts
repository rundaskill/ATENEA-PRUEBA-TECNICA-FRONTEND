import { Component, OnInit } from '@angular/core';
import { AreaService } from './services/Area.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ATENEA-PRUEBA-TECNICA-BACKEND';
  menu: string = 'area';
  constructor(private areaService: AreaService) {}

  ngOnInit() {
    this.areaService.getAreas().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
