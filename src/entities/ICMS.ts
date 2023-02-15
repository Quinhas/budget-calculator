import { Tax } from './Tax';

interface ICMSProps {
  aliquot: number;
}

export class ICMS implements Tax {
  private readonly props: ICMSProps;

  constructor(props: ICMSProps) {
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
