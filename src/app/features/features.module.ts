import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CartModule, ProductsModule],
  exports: [CartModule, ProductsModule],
})
export class FeaturesModule {}
