import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

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
  private router = inject(Router);
  finaxilogo = 'finaxi-logo.png';
  nav: NavItems[] = [
    { label: 'Features', id: 'features' },
    { label: 'How it works', id: 'how' },
    { label: 'FAQ', id: 'faq' },
  ];

  navigateToAuthPage() {
    this.router.navigate(['/authpage']);
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
