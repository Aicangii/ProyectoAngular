import { Component, OnInit } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ProbandoService } from '../servicios/probando.service';

@Component ({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
title = 'app';
condicional: boolean;
var: string;

  constructor(
    public probandoService: ProbandoService
  ) {
    this.condicional = true;
  }

  ngOnInit() {
    this.probandoService.llamame().subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
