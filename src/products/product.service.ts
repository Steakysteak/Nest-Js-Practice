import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number): string {
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, title, description, price);
    this.products.push(newProduct);
    return prodId;
  }

  getAllProducts(): Product[] {
    return [...this.products];
  }

  getSingleProduct(id: string): Product {
    const prod = this.getAllProducts().find(product => product.id === id);
    return prod
  }
}
