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
  readonly buy = output<Product["_id"]>();
  onProductBuy(event: Event) {
    event.stopPropagation();

    if (!this.product) {
      return;
    }

    console.log("Buy product");
  }

  isStarActive(starIndex: number): boolean {
    return !!this.product && this.product().rating >= starIndex;
  }
}
