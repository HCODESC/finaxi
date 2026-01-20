import { Component } from '@angular/core';
import { LucideAngularModule, Lock, ShieldCheck, ArrowRight } from 'lucide-angular';
import { Pill } from '../../components/pill/pill';

@Component({
  selector: 'app-how-it-works',
  imports: [LucideAngularModule, Pill],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {
  readonly Lock = Lock;
  readonly ShieldCheck = ShieldCheck;
  readonly ArrowRight = ArrowRight;

  readonly steps = [
    {
      n: 1,
      title: 'Create categories',
      description: 'Make clean buckets: rent, food, bills, fun. Keep it human.',
    },
    {
      n: 2,
      title: 'Set budgets',
      description: 'Assign monthly caps per category. Your future self will thank you.',
    },
    {
      n: 3,
      title: 'Track transactions',
      description: 'Log spending and income. Filter and review summaries anytime.',
    },
  ];

  readonly faq = [
    {
      q: 'Is Finaxi a real bank?',
      a: 'Nope. It’s a portfolio project focused on budgeting, category tracking, and transactions—no financial custody.',
    },
    {
      q: 'Will you support bank syncing?',
      a: 'Not for the MVP. The goal is a clean, well-structured experience around manual entry and API-backed reporting.',
    },
    {
      q: 'What’s the stack?',
      a: 'An API-first backend with a modern web dashboard. The landing is intentionally minimal and product-like.',
    },
    {
      q: 'Is there a free tier?',
      a: 'For a portfolio, yes—pricing here is just presentation. You can replace this with a simple “Sign in” CTA.',
    },
  ];
}
