import { Tax } from './Tax';

interface PISProps {
  aliquot: number;
}

export class PIS implements Tax {
  private readonly props: PISProps;

  constructor(props: PISProps) {
    this.props = props;
  }

  public get aliquot(): number {
    return this.props.aliquot;
  }

  public set aliquot(value: number) {
    this.props.aliquot = value;
  }

  public calculateTaxValue({ budgetValue }: { budgetValue: number }): number {
    return (budgetValue / 100) * this.aliquot;
  }
}
