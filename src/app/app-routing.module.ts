import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { ConversionHistoryComponent } from './components/conversion-history/conversion-history.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'converter', component: CurrencyConverterComponent }, 
  { path: 'list', component: CurrencyListComponent },
  { path: 'history', component: ConversionHistoryComponent }, 
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
