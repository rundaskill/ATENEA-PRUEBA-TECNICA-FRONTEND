import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/models/Person.model';
import { PersonService } from 'src/app/services/Person.service';

@Component({
  selector: 'app-Person',
  templateUrl: './Person.component.html',
  styleUrls: ['./Person.component.css'],
})
export class PersonComponent implements OnInit {
  persons: PersonModel[] = [];
  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getPersons().subscribe({
      next: (data) => {
        this.persons = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
