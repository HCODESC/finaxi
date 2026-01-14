import { Component } from '@angular/core';

interface NavItems {
  label: string;
  id: string;
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  finaxilogo = 'finaxi-logo.png';
  nav: NavItems[] = [
    { label: 'Features', id: 'features' },
    { label: 'How it works', id: 'how' },
    { label: 'Pricing', id: 'Pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
