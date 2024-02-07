import { Injectable } from '@nestjs/common';
// import { Product } from './product.model';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  // products: Product[] = [];
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async insertProduct(
    title: string,
    description: string,
    price: number,
  ): Promise<string> {
    // const prodId = new Date().toString();
    // const newProduct = new Product(prodId, title, description, price);
    // this.products.push(newProduct);
    // return prodId;
    const newProduct = this.productRepository.create({
      title,
      description,
      price,
    });
    const savedProduct = await this.productRepository.save(newProduct);
    return savedProduct.id;
  }

  async getAllProducts(): Promise<Product[]> {
    // return [...this.products];
    return this.productRepository.find();
  }

  async getSingleProduct(id: string): Promise<Product> {
    // const prod = this.getAllProducts().find(product => product.id === id);
    // return prod
    return this.productRepository.findOne({ where: { id: id } });
  }

  async deleteProduct(id: string): Promise<DeleteResult> {
    return this.productRepository.delete({ id: id });
  }

  async updateProduct(
    id: string,
    title?: string,
    description?: string,
    price?: number,
  ): Promise<UpdateResult> {
    // const updatedProduct  = { id: id, ...{title && title: title},  ...{description && description: description},  ...{price && price: price}, }

    let retrievedProduct = await this.productRepository.findOne({ where: { id: id } });

    let product = {
      title: title ? title : retrievedProduct.title,
      description: description ? description : retrievedProduct.description,
      price: price ? price : retrievedProduct.price,
    }

    return this.productRepository.update(id,product);
  }
}
