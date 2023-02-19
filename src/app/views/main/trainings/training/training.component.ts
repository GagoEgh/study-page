import { Component, Input, OnInit } from '@angular/core';
import { TrainingDTO } from '@core/models';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit{

  @Input()training!:TrainingDTO;
  

  constructor(){}
  ngOnInit(): void {
  }
}
