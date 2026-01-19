import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { LucideAngularModule, TrendingUp } from 'lucide-angular';
import { Pill } from '../../components/pill/pill';

interface BudgetCategory {
  name: string;
  used: number;
}

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, Pill],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly TrendingUp = TrendingUp;

  readonly budgetCategories = signal<BudgetCategory[]>([
    { name: 'Rent', used: 72 },
    { name: 'Food', used: 12 },
    { name: 'Utilities', used: 10 },
    { name: 'Fun', used: 18 },
  ]);

  readonly recentTransactions = signal([
    { label: 'Coffee', ammount: '-5.20' },
    { label: 'Paycheck', ammount: '3,200' },
    { label: 'Groceries', ammount: '322.50' },
  ]);
}
