import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {
  displayedColumns: string[] = ['symbol', 'name'];
  dataSource = new MatTableDataSource<any>();
  currencies: any = {};
  currencyCodes: string[] = [];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe((data: any) => {
      this.dataSource.data = data.supported_codes;
      this.currencyService.getCurrenciesLocal().subscribe(data => {
        this.currencies = Object.entries(data.conversion_rates).map(([code, rate]) => ({ code, rate }));
      });
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
