import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/YOUR_API_KEY';

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/codes`);
  }

  convertCurrency(base: string, target: string, amount: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pair/${base}/${target}/${amount}`);
  }
}
