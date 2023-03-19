import { Budget } from '../Budget';
import { Discount, DiscountType } from '../Discount';
import { Approved } from './Approved';
import { BudgetStatus } from './BudgetStatus';
import { Disapproved } from './Disapproved';

export class Pending extends BudgetStatus {
  public applyDiscount(budget: Budget): void {
    const discount = new Discount({ type: DiscountType.PERCENTAGE, value: 5 });
    budget.addDiscount(discount);
  }

  public approve(budget: Budget): void {
    budget.status = new Approved();
  }

  public disapprove(budget: Budget): void {
    budget.status = new Disapproved();
  }

  public finalize(budget: Budget): void {
    console.error(
      'Orcamento em aprovação não podem ir para finalizado diretamente'
    );
  }
}
