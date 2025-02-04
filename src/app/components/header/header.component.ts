import { Component, input, output } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ApplicationConfig } from "../../shared/application-config/application-config.interface";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  readonly config = input.required<ApplicationConfig>();

  readonly menuClick = output();
}
