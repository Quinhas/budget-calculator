import { Replace } from 'src/utils/Replace';
import { Tax, TaxProps } from './Tax';

interface PISProps extends TaxProps {
  aliquot: number;
}

export class PIS implements Tax {
  private readonly props: PISProps;

  constructor(props: Replace<PISProps, { type?: string }>) {
    this.props = {
      type: 'PIS',
      aliquot: props.aliquot,
    };
  }

  public get aliquot(): number {
    return this.props.aliquot;
  }

  public set aliquot(value: number) {
    this.props.aliquot = value;
  }

  public get type() {
    return this.props.type;
  }

  public set type(value: string) {
    this.props.type = value;
  }

  public calculateTaxValue({ budgetValue }: { budgetValue: number }): number {
    return (budgetValue / 100) * this.aliquot;
  }
}
