import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Features } from '../features/features';
import { HowItWorks } from '../how-it-works/how-it-works';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Hero, Features, HowItWorks, Footer, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
