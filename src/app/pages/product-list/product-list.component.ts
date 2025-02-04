import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { productsMock } from "../../shared/products/products.mock";
import { MatGridListModule } from "@angular/material/grid-list";
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
}
