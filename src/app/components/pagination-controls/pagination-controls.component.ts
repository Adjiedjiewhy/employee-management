import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonMainComponent } from '../button-main/button-main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination-controls',
  standalone: true,
  imports: [ButtonMainComponent, CommonModule, FormsModule],
  templateUrl: './pagination-controls.component.html',
  styleUrl: './pagination-controls.component.css'
})
export class PaginationControlsComponent {
  @Output() clickEventL = new EventEmitter();
  @Output() clickEventR = new EventEmitter();
  @Output() selectEvent = new EventEmitter();

  @Input() currentPage: number | undefined; 
  @Input() totalPages: number | undefined; 
  @Input() itemPerPage: number | undefined; 

  ngOnInit(){
    console.log(this.itemPerPage)
  }

  clickMethodL(): void{
    this.clickEventL.emit();
  }

  clickMethodR(): void{
    this.clickEventR.emit();
  }

  selectMethod(): void{
    this.selectEvent.emit();
  }
}
