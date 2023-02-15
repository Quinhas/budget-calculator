import { Replace } from 'src/utils/Replace';
import { Tax } from './Tax';

interface BudgetProps {
  value: number;
  tax: Tax[];
}

export class Budget {
  private readonly props: BudgetProps;

  constructor(props: Replace<BudgetProps, {tax?: Tax[]}>) {
    this.validateValue(props.value);
    this.props = {
      ...props,
      tax: props.tax ?? []
    };
  }

  public get value() {
    return this.props.value;
  }

  public set value(value: number) {
    this.validateValue(value);
    this.props.value = value;
  }

  private validateValue(value: number) {
    if (isNaN(value)) {
      throw new Error('Invalid value.');
    }
  }

  public addTax(tax: Tax) {
    this.props.tax.push(tax);
  }

  public get totalValue() {
    const taxesValue = this.props.tax.reduce((acc, tax) => {
      return acc + tax.calculateTaxValue(this.props.value);
    }, 0);

    return this.props.value + taxesValue;
  }

}
