import { Tax } from './Tax';

interface ISSProps {
  aliquot: number;
}

export class ISS implements Tax {
  private readonly props: ISSProps;

  constructor(props: ISSProps) {
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
