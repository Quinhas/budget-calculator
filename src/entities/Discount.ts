export enum DiscountType {
  "PERCENTAGE",
  "VALUE"
}

export interface DiscountProps {
  type: DiscountType;
  value: number;
}

export class Discount {
  private readonly props: DiscountProps;

  constructor(props: DiscountProps) {
    this.props = props;
  }

  public get type(): DiscountType {
    return this.props.type;
  };

  public set type(value: DiscountType) {
    this.props.type = value;
  }

  public get value(): number {
    return this.props.value;
  };

  public set value(value: number) {
    this.props.value = value;
  }

  public calculateDiscountValue({budgetValue}: {budgetValue: number}) {
    if (this.type === DiscountType.PERCENTAGE) {
      return (budgetValue / 100) * this.value;
    }

    return this.value;
  }
}
