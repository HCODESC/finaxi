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
}
