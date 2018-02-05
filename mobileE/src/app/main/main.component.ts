import { Component, OnInit, ElementRef, Input, OnDestroy } from '@angular/core';

// import { MaterializeAction } from 'angular2-materialize';
// import { EventEmitter } from '@angular/core';

import { ModalServiceService } from '../modal-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private bodyText: string;

  constructor(private modalService: ModalServiceService) { }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string){
    this.modalService.open(id);
  }

  closeModal(id: string){
    this.modalService.close(id);
  }



}
