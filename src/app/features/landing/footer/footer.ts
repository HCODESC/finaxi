import { Component } from '@angular/core';

interface FooterItems {
  label: string;
  id: string;
}
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  finaxilogo = 'finaxi-logo.png';

  nav: FooterItems[] = [
    { label: 'Features', id: 'features' },
    { label: 'How it works', id: 'how' },
    { label: 'FAQ', id: 'faq' },
  ];

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
