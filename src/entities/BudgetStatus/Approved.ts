import { Budget } from '../Budget';
import { Discount, DiscountType } from '../Discount';
import { BudgetStatus } from './BudgetStatus';
import { Finished } from './Finished';

export class Approved extends BudgetStatus {
  public applyDiscount(budget: Budget): void {
    const discount = new Discount({ type: DiscountType.PERCENTAGE, value: 2 });
    budget.addDiscount(discount);
  }

  public approve(budget: Budget): void {
    console.error('Orçamento já está em estado de aprovação');
  }

  public disapprove(budget: Budget): void {
    console.error(
      'Orçamento está em estado de aprovação e não pode ser reprovado'
    );
  }

  public finalize(budget: Budget): void {
    budget.status = new Finished();
  }
}
