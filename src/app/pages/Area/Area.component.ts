import { Component, OnInit } from '@angular/core';
import { AreaModel } from 'src/app/models/Area.model';
import { AreaService } from 'src/app/services/Area.service';

@Component({
  selector: 'app-Area',
  templateUrl: './Area.component.html',
  styleUrls: ['./Area.component.css'],
})
export class AreaComponent implements OnInit {
  areas: AreaModel[] = [];
  constructor(private areaService: AreaService) {}

  ngOnInit() {
    this.areaService.getAreas().subscribe({
      next: (data) => {
        this.areas = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
