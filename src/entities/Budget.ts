import { Replace } from 'src/utils/Replace';
import { Item } from './Item';
import { Tax } from './Tax';

interface BudgetProps {
  value: number;
  items: Item[];
  tax: Tax[];
}

export class Budget {
  private readonly props: BudgetProps;

  constructor(
    props: Replace<BudgetProps, { value?: number; items?: Item[]; tax?: Tax[] }>
  ) {
    if (props.value) {
      this.validateValue(props.value);
    }
    this.props = {
      ...props,
      value: props.value ?? 0,
      items: props.items ?? [],
      tax: props.tax ?? [],
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

  public addItem(item: Item) {
    this.props.items.push(item);
    this.props.value += item.value;
  }

  public addTax(tax: Tax) {
    this.props.tax.push(tax);
  }

  public get totalValue() {
    const taxesValue = this.props.tax.reduce((acc, tax) => {
      return acc + tax.calculateTaxValue({ budgetValue: this.props.value });
    }, 0);

    return this.props.value + taxesValue;
  }
}
