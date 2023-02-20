import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingDTO } from '@core/models';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit{

  @Input()training!:TrainingDTO;
  

  constructor(
    private _router:Router
  ){}

  ngOnInit(): void {
  }

  // update(id:any){
  //   this._router.navigate(['main','trainings','updateTrainig',id])
  // }
}
