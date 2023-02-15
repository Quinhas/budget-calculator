export abstract class Tax {
  public abstract calculateTaxValue(props: { budgetValue: number }): number;
}
