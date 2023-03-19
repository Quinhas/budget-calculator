import { formatCurrency } from '../utils/formatCurrency';
import { BudgetStatus } from './BudgetStatus/BudgetStatus';
import { Pending } from './BudgetStatus/Pending';
import { Discount, DiscountType } from './Discount';
import { Item } from './Item';
import { Tax } from './Tax';

interface BudgetProps {
  value: number;
  items: Item[];
  taxes: Tax[];
  discounts: Discount[];
  status: BudgetStatus;
}

interface BudgetDTO {
  items?: Item[];
  taxes?: Tax[];
  discounts?: Discount[];
}

export class Budget {
  private readonly props: BudgetProps;

  constructor(props: BudgetDTO) {
    this.props = {
      value: 0,
      items: props.items ?? [],
      taxes: props.taxes ?? [],
      discounts: props.discounts ?? [],
      status: new Pending(),
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
    this.props.taxes.push(tax);
  }

  public addDiscount(discount: Discount) {
    this.props.discounts.push(discount);
  }

  public set status(budgetStatus: BudgetStatus) {
    this.props.status = budgetStatus;
  }

  public get totalValue(): number {
    this.checkDiscount();
    const totalValue =
      this.value + this.calculateTotalTaxes() - this.calculateTotalDiscounts();
    return totalValue;
  }

  private calculateTotalTaxes() {
    return this.props.taxes.reduce(
      (acc, tax) =>
        acc +
        tax.calculateTaxValue({
          budgetValue: this.value,
        }),
      0
    );
  }

  private calculateTotalDiscounts() {
    return this.props.discounts.reduce((acc, discount) => {
      return acc + discount.calculateDiscountValue({ budgetValue: this.value - acc });
    }, 0);
  }

  private checkDiscount() {
    if (this.props.items.length > 5) {
      const discount = new Discount({
        type: DiscountType.PERCENTAGE,
        value: 10,
      });
      this.addDiscount(discount);
      return;
    }

    if (this.props.value > 500) {
      const discount = new Discount({
        type: DiscountType.PERCENTAGE,
        value: 7,
      });
      this.addDiscount(discount);
      return;
    }
  }

  private printTaxes() {
    console.log('🟡 IMPOSTOS');
    this.props.taxes.map((tax) => {
      console.log(
        `🟡 ${tax.type}: ${formatCurrency(
          tax.calculateTaxValue({
            budgetValue: this.value,
          })
        )}`
      );
    });
  }

  private printItems() {
    console.log('🔵 ITEMS');
    this.props.items.map((item) => {
      console.log(`🔵 ${item.desc}: ${formatCurrency(item.value)}`);
    });
  }

  private printDiscounts() {
    console.log('🟢 DESCONTOS');
    this.props.discounts.map((discount) => {
      if (discount.type === DiscountType.PERCENTAGE) {
        console.log(
          `🟢 Desconto de ${discount.value}%: ${formatCurrency(
            discount.calculateDiscountValue({ budgetValue: this.value })
          )}`
        );
        return;
      }

      console.log(`🟢 Desconto de ${formatCurrency(discount.value)}`);
    });
  }

  public applyExtraDiscount() {
    this.props.status.applyDiscount(this);
  }

  public approve() {
    this.props.status.approve(this);
  }

  public disapprove() {
    this.props.status.disapprove(this);
  }

  public finalize() {
    this.props.status.finalize(this);
  }
}
