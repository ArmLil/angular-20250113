import { Component, ChangeDetectionStrategy, input, output } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { Product } from "../../../shared/products/product.interface";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly product = input.required<Product>();
  readonly buy = output<Product>();
  onProductBuy(event: Event) {
    event.stopPropagation();

    if (!this.product) {
      return;
    }

    console.log("Buy product");
    this.buy.emit(this.product());
  }

  isStarActive(starIndex: number): boolean {
    const product = this.product();
    return product && product.rating !== undefined && product.rating >= starIndex;
  }
}
