import { formatCurrency } from '../utils/formatCurrency';
import { Item } from './Item';
import { Tax } from './Tax';

interface BudgetProps {
  value: number;
  items: Item[];
  tax: Tax[];
}

interface BudgetDTO {
  items?: Item[];
  tax?: Tax[];
}

export class Budget {
  private readonly props: BudgetProps;

  constructor(props: BudgetDTO) {
    this.props = {
      value: 0,
      items: props.items ?? [],
      tax: props.tax ?? [],
    };
  }

  public get value() {
    return this.props.value;
  }

  public addItem(item: Item) {
    this.props.items.push(item);
    this.props.value += item.value;
  }

  public addTax(tax: Tax) {
    this.props.tax.push(tax);
  }

  public get totalValue(): number {
    return this.value + this.calculateTotalTaxes();
  }

  private calculateTotalTaxes() {
    return this.props.tax.reduce(
      (acc, tax) =>
        acc +
        tax.calculateTaxValue({
          budgetValue: this.value,
        }),
      0
    );
  }

  public printTaxes() {
    this.props.tax.map((tax) => {
      console.log(
        `🟡 ${tax.type}: ${formatCurrency(
          tax.calculateTaxValue({
            budgetValue: this.value,
          })
        )}`
      );
    });
  }

  public printItems() {
    this.props.items.map((item) => {
      console.log(`🔵 ${item.desc}: ${formatCurrency(item.value)}`);
    });
  }
}
