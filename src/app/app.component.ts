import { Component, ChangeDetectionStrategy, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { ProductListComponent } from "./pages/product-list/product-list.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { applicationConfigMock } from "./shared/application-config/application-config.mock";
import { ProductBuied } from "./shared/products/product.interface";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductListComponent, SidenavComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly isSidenavOpenedStore = signal(false);
  applicationConfig = applicationConfigMock;
  readonly userBusket = signal<ProductBuied[]>([]);
  onMenuClick() {
    this.isSidenavOpenedStore.update((isSidenavOpened) => !isSidenavOpened);
  }

  onUserBusket(userBusket: ProductBuied[]) {
    console.log("User busket", userBusket);
    this.userBusket.set(userBusket);
  }
}
