import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductModule } from './product/product.module';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { InputModule } from 'src/app/shared/input/input.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductModule, InputModule, ButtonModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
