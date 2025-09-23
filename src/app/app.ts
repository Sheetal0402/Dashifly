import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicNavComponent } from './shared/components/public-nav/public-nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PublicNavComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'dashify';
}
