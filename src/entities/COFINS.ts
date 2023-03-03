import { Tax, TaxProps } from './Tax';

export class COFINS implements Tax {
  private readonly props: TaxProps;

  constructor() {
    this.props = {
      type: 'COFINS',
    };
  }

  public get type() {
    return this.props.type;
  }

  public set type(value: string) {
    this.props.type = value;
  }

  public calculateTaxValue(): number {
    return 10;
  }
}
