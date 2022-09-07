import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { CartModule } from './features/cart/cart.module';
import { ProductsModule } from './features/products/products.module';
import { InputModule } from './shared/input/input.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    ProductsModule,
    CartModule,
    InputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
