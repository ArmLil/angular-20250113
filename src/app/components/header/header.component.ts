import { Component, input, output, computed } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatBadgeModule } from "@angular/material/badge";
import { ApplicationConfig } from "../../shared/application-config/application-config.interface";
import { ProductBuied } from "../../shared/products/product.interface";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  readonly config = input.required<ApplicationConfig>();
  readonly userBusket = input.required<ProductBuied[]>();
  readonly totalQuantity = computed(() => {
    console.log("this.userBusket()", this.userBusket());
    return this.userBusket().reduce((sum, product) => sum + product.quantity, 0);
  });
  readonly menuClick = output();
}
