import { Replace } from 'src/utils/Replace';
import { Tax, TaxProps } from './Tax';

interface ISSProps extends TaxProps {
  aliquot: number;
}

export class ISS implements Tax {
  private readonly props: ISSProps;

  constructor(props: Replace<ISSProps, { type?: string }>) {
    this.props = {
      type: 'ISS',
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
