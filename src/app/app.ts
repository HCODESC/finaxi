import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './features/landing/navbar/navbar';
import { Hero } from './features/landing/hero/hero';
import { Features } from './features/landing/features/features';
import { HowItWorks } from './features/landing/how-it-works/how-it-works';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, Features, HowItWorks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('finaxi');
}
