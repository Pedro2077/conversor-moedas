import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { defaultIfEmpty } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiKey = 'ec820992c68916dab465b926';
  private apiUrl = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/`;

  constructor(private http: HttpClient) { }

  
  getCurrencies(base: string = 'USD'): Observable<{ code: string, rate: number }[]> {
    return this.http.get<any>(`${this.apiUrl}${base}`).pipe(
      map(response => {
        console.log('Response from API:', response); 
        const conversionRates = response.conversion_rates;
        return Object.entries(conversionRates).map(([code, rate]) => ({ code, rate: rate as number }));
      }),
      defaultIfEmpty([])  
    );
  }
  

  
  getCurrenciesLocal(): Observable<any> {
    const mockData = {
      "result": "success",
      "documentation": "https://www.exchangerate-api.com/docs",
      "terms_of_use": "https://www.exchangerate-api.com/terms",
      "time_last_update_unix": 1728000001,
      "time_last_update_utc": "Fri, 04 Oct 2024 00:00:01 +0000",
      "time_next_update_unix": 1728086401,
      "time_next_update_utc": "Sat, 05 Oct 2024 00:00:01 +0000",
      "base_code": "USD",
      "conversion_rates": {
        "USD": 1,
        "AED": 3.6725,
        "AFN": 68.6563,
        "ALL": 89.5601,
        "AMD": 386.9687,
        "ANG": 1.79,
        "AOA": 947.446,
        "ARS": 972.75,
        "AUD": 1.4606,
        "AWG": 1.79,
        "AZN": 1.7,
        "BAM": 1.7727,
        "BBD": 2,
        "BDT": 119.4992,
        "BGN": 1.7726,
        "BHD": 0.376,
        "BIF": 2906.6461,
        "BMD": 1,
        "BND": 1.297,
        "BOB": 6.9201,
        "BRL": 5.4598,
        "BSD": 1,
        "BTN": 84.0158,
        "BWP": 13.1967,
        "BYN": 3.262,
        "BZD": 2,
        "CAD": 1.3543,
        "CDF": 2845.9842,
        "CHF": 0.8518,
        "CLP": 911.8071,
        "CNY": 7.0364,
        "COP": 4189.3717,
        "CRC": 517.6727,
        "CUP": 24,
        "CVE": 99.9433,
        "CZK": 22.9626,
        "DJF": 177.721,
        "DKK": 6.7617,
        "DOP": 60.3856,
        "DZD": 132.7996,
        "EGP": 48.3483,
        "ERN": 15,
        "ETB": 118.0372,
        "EUR": 0.9064,
        "FJD": 2.1943,
        "FKP": 0.7618,
        "FOK": 6.7618,
        "GBP": 0.7618,
        "GEL": 2.7329,
        "GGP": 0.7618,
        "GHS": 15.8363,
        "GIP": 0.7618,
        "GMD": 70.6787,
        "GNF": 8659.5366,
        "GTQ": 7.7303,
        "GYD": 209.0303,
        "HKD": 7.7665,
        "HNL": 24.895,
        "HRK": 6.8292,
        "HTG": 131.8871,
        "HUF": 363.8263,
        "IDR": 15441.5,
        "ILS": 3.7985,
        "IMP": 0.7618,
        "INR": 84.0171,
        "IQD": 1309.6127,
        "IRR": 42056.3244,
        "ISK": 135.4676,
        "JEP": 0.7618,
        "JMD": 157.8896,
        "JOD": 0.709,
        "JPY": 146.7927,
        "KES": 129.0375,
        "KGS": 84.1216,
        "KHR": 4071.678,
        "KID": 1.4607,
        "KMF": 445.9156,
        "KRW": 1334.1332,
        "KWD": 0.3058,
        "KYD": 0.8333,
        "KZT": 482.5153,
        "LAK": 21964.23,
        "LBP": 89500,
        "LKR": 294.0208,
        "LRD": 193.2049,
        "LSL": 17.4953,
        "LYD": 4.7472,
        "MAD": 9.7752,
        "MDL": 17.4853,
        "MGA": 4555.549,
        "MKD": 55.5663,
        "MMK": 2100.5511,
        "MNT": 3413.5254,
        "MOP": 7.9997,
        "MRU": 39.7167,
        "MUR": 46.2508,
        "MVR": 15.4381,
        "MWK": 1741.2218,
        "MXN": 19.4128,
        "MYR": 4.2198,
        "MZN": 63.897,
        "NAD": 17.4953,
        "NGN": 1657.7344,
        "NIO": 36.7613,
        "NOK": 10.6075,
        "NPR": 134.4253,
        "NZD": 1.6083,
        "OMR": 0.3845,
        "PAB": 1,
        "PEN": 3.7256,
        "PGK": 3.9413,
        "PHP": 56.4112,
        "PKR": 277.9982,
        "PLN": 3.9024,
        "PYG": 7804.9935,
        "QAR": 3.64,
        "RON": 4.5091,
        "RSD": 106.1296,
        "RUB": 94.9351,
        "RWF": 1373.0056,
        "SAR": 3.75,
        "SBD": 8.258,
        "SCR": 13.6423,
        "SDG": 511.1922,
        "SEK": 10.3026,
        "SGD": 1.297,
        "SHP": 0.7618,
        "SLE": 22.5863,
        "SLL": 22586.3304,
        "SOS": 571.4135,
        "SRD": 31.0714,
        "SSP": 3156.1674,
        "STN": 22.2066,
        "SYP": 12891.9573,
        "SZL": 17.4953,
        "THB": 33.1277,
        "TJS": 10.6662,
        "TMT": 3.4992,
        "TND": 3.0509,
        "TOP": 2.2993,
        "TRY": 34.2341,
        "TTD": 6.7505,
        "TVD": 1.4607,
        "TWD": 32.0151,
        "TZS": 2722.6331,
        "UAH": 41.2052,
        "UGX": 3672.9986,
        "UYU": 41.7664,
        "UZS": 12728.8579,
        "VES": 36.9855,
        "VND": 24747.3175,
        "VUV": 117.9379,
        "WST": 2.7024,
        "XAF": 594.5541,
        "XCD": 2.7,
        "XDR": 0.743,
        "XOF": 594.5541,
        "XPF": 108.1616,
        "YER": 250.1933,
        "ZAR": 17.4946,
        "ZMW": 26.3457,
        "ZWL": 25.2813
      }
    };
    return of(mockData);
  }

  
  convertCurrency(base: string, target: string, amount: number): Observable<number> {
    return this.http.get<any>(`${this.apiUrl}${base}`).pipe(
      map(response => {
        const rate = response.conversion_rates[target];
        return rate ? rate * amount : 0;  
      }),
      defaultIfEmpty(0)  
    );
  }
  
  
}
