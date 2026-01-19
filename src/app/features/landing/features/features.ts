import { Component } from '@angular/core';
import {
  LucideAngularModule,
  TrendingUp,
  ShieldCheck,
  Lock,
  LucideIconData,
  Check,
} from 'lucide-angular';
import { Pill } from '../../components/pill/pill';

@Component({
  selector: 'app-features',
  imports: [LucideAngularModule, Pill],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  readonly Check = Check;
  readonly ShieldCheck = ShieldCheck;
  readonly Lock = Lock;

  readonly features: Array<{ icon: LucideIconData; title: string; description: string }> = [
    {
      icon: TrendingUp,
      title: 'Budgets & categories',
      description:
        'Create budgets by category, track spending in real time, and see what’s drifting off course before it hurts.',
    },
    {
      icon: ShieldCheck,
      title: 'Transaction tracking',
      description:
        'Log income and expenses with clean metadata. Filter, search, and audit—because money deserves receipts.',
    },
    {
      icon: Lock,
      title: 'Login & dashboard',
      description:
        'A straightforward auth flow that gates your dashboard and keeps the portfolio app feeling real and secure.',
    },
  ];
}
