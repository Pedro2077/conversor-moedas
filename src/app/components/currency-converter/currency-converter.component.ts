import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  currencies: any[] = [];
  conversionForm!: FormGroup;
  conversionResult: string = '';

  constructor(private currencyService: CurrencyService, private fb: FormBuilder) {}

  ngOnInit(): void {
    
    this.currencyService.getCurrencies().subscribe((currencies) => {
      this.currencies = currencies || []; 
    });

   
    this.conversionForm = this.fb.group({
      baseCurrency: ['', Validators.required],
      targetCurrency: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

 
  onConvert() {
    const { baseCurrency, targetCurrency, amount } = this.conversionForm.value;
    this.currencyService.convertCurrency(baseCurrency, targetCurrency, amount).subscribe((data: any) => {
      this.conversionResult = `${amount} ${baseCurrency} = ${data.conversion_result} ${targetCurrency}`;
    });
  }
}
