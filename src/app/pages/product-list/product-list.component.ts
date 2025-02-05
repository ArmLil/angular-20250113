import { Component, ChangeDetectionStrategy, signal, output } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { productsMock } from "../../shared/products/products.mock";
import { MatGridListModule } from "@angular/material/grid-list";
import { ProductBuied, Product } from "../../shared/products/product.interface";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CardComponent, MatGridListModule],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  readonly products = productsMock;
  readonly basket = signal<ProductBuied[]>([]);
  readonly userBusket = output<ProductBuied[]>();

  onProductBuy(product: Product) {
    console.log("Buy product", product);
    // Обновление корзины: проверяем, есть ли продукт в корзине
    this.basket.update((basket) => {
      const existingProduct = basket.find((item) => item._id === product._id);

      if (existingProduct) {
        // Если продукт уже есть, увеличиваем его количество
        existingProduct.quantity += 1;
        return [...basket]; // Возвращаем обновленную корзину
      } else {
        // Если продукта нет, добавляем новый с количеством 1
        return [...basket, { ...product, quantity: 1 }];
      }
    });
    this.userBusket.emit(this.basket());

    console.log("this.basket()", this.basket());
  }
}
