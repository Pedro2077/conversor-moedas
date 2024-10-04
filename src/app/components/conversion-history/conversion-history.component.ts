import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversion-history.component.html',
  styleUrls: ['./conversion-history.component.scss']
})
export class ConversionHistoryComponent implements OnInit {
  conversionHistory: any[] = [];

  constructor() {}

  ngOnInit(): void {
    
    this.conversionHistory = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
  }

  deleteConversion(index: number) {
    this.conversionHistory.splice(index, 1);
    localStorage.setItem('conversionHistory', JSON.stringify(this.conversionHistory));
  }
}
