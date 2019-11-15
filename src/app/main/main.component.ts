import { Component, OnInit } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ProbandoService } from '../servicios/probando.service';
import { CommentModel } from '../model/CommentModel';


@Component ({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
title = 'app';
condicional: boolean;
varTest = 6;
var: string;
comentarios: CommentModel[] = [];

  constructor(
    public probandoService: ProbandoService
  ) {
    this.condicional = true;
  }

  ngOnInit() {
    const response = this.probandoService.llamame().subscribe(
      (data: CommentModel[]) => {
        console.log(data);
        this.comentarios = data;
      }
    );
    console.log(Response);
  }

}
