import { Budget } from '../Budget';
import { BudgetStatus } from './BudgetStatus';

export class Finished extends BudgetStatus {
  public applyDiscount(budget: Budget): void {
    console.error('Orçamentos finalizados não recebem desconto extra!');
  }

  public approve(budget: Budget): void {
    console.error('Orçamento já está finalizado.');
  }

  public disapprove(budget: Budget): void {
    console.error('Orçamento já está finalizado.');
  }

  public finalize(budget: Budget): void {
    console.error('Orçamento já está finalizado.');
  }


}
