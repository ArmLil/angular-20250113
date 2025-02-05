import { ChangeDetectionStrategy, Component, model, output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ProductListComponent } from "../../pages/product-list/product-list.component";
import { ProductBuied } from "../../shared/products/product.interface";
@Component({
  selector: "app-sidenav",
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, ProductListComponent],
  templateUrl: "./sidenav.component.html",
  styleUrl: "./sidenav.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  readonly isSidenavOpened = model(false);
  readonly userBusket = output<ProductBuied[]>();
  toggleSidenavOpened() {
    this.isSidenavOpened.set(!this.isSidenavOpened());
  }

  onUserBusket(userBusket: ProductBuied[]) {
    console.log("User busket", userBusket);
    this.userBusket.emit(userBusket);
  }
}
