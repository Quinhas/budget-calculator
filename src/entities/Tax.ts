export interface TaxProps {
  type: string;
}

export abstract class Tax {
  public abstract get type(): string;
  public abstract set type(value: string);
  public abstract calculateTaxValue(props: { budgetValue: number }): number;
}
