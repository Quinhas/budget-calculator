interface TaxProps {
  type: string;
  aliquot: number;
}

export class Tax {
  private readonly props: TaxProps;

  constructor(props: TaxProps) {
    this.validateType(props.type);
    this.validateAliquot(props.aliquot);
    this.props = props;
  }

  public get type() {
    return this.props.type;
  }

  public set type(type: string) {
    this.validateType(type);
    this.props.type = type;
  }

  private validateType(type: string) {
    if (type.trim().length === 0) {
      throw new Error('Invalid type.');
    }
  }

  public get aliquot() {
    return this.props.aliquot;
  }

  public set aliquot(aliquot: number) {
    this.validateAliquot(aliquot);
    this.props.aliquot = aliquot;
  }

  private validateAliquot(aliquot: number) {
    if (isNaN(aliquot)) {
      throw new Error('Invalid aliquot.');
    }
  }

  public calculateTaxValue(budgetValue: number) {
    return (budgetValue / 100) * this.props.aliquot;
  }


}
