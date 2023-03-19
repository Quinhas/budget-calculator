import { Budget } from '../Budget';

export abstract class BudgetStatus {
  public abstract applyDiscount(budget: Budget): void;
  public abstract approve(budget: Budget): void;
  public abstract disapprove(budget: Budget): void;
  public abstract finalize(budget: Budget): void;
}
