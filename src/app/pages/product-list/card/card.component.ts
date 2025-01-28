import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { productsMock } from "../../../shared/products/products.mock";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
})
export class CardComponent {
  readonly product = productsMock[0];

  onProductBuy(event: Event) {
    event.stopPropagation();

    if (!this.product) {
      return;
    }

    console.log("Buy product");
  }

  isStarActive(starIndex: number): boolean {
    return !!this.product && this.product.rating >= starIndex;
  }
}
