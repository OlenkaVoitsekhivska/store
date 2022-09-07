import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductModule } from './product/product.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductModule, SharedModule],
  exports: [ProductModule, ProductsComponent],
})
export class ProductsModule {}
