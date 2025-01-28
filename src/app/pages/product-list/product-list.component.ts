import { Component } from "@angular/core";
import { CardComponent } from "./card/card.component";
@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
})
export class ProductListComponent {}
