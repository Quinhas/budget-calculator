import { Budget } from '../Budget';
import { BudgetStatus } from './BudgetStatus';
import { Finished } from './Finished';

export class Disapproved extends BudgetStatus {
  public applyDiscount(budget: Budget): void {
    console.error('Orçamentos reprovados não recebem desconto extra!');
  }

  public approve(budget: Budget): void {
    console.error(
      'Orçamento está em estado de reprovação e não pode ser aprovado'
    );
  }

  public disapprove(budget: Budget): void {
    console.error('Orçamento já está em estado de reprovação');
  }

  public finalize(budget: Budget): void {
    budget.status = new Finished();
  }
}
