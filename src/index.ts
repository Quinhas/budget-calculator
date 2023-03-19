import { Budget } from './entities/Budget';
import { Item } from './entities/Item';
import { formatCurrency } from './utils/formatCurrency';

/**
 * Cálculo de orçamento
 * @namespace Development and Design Patterns
 *
 * @author Felipe Amaral - 601101
 * @author Jose Vicente - 609684
 * @author Lucas Santana - 601314
 * @author Luis Fernando - 579017
 * @author Matheus Colombo - 609307
 */
async function app() {
  console.clear();
  console.log('🚀 CALCULADORA DE ORÇAMENTOS\n');

  const budget = new Budget({});
  budget.addItem(new Item({ desc: 'Caneta', value: 200 }));
  budget.addItem(new Item({ desc: 'Borracha', value: 100 }));
  budget.addItem(new Item({ desc: 'Lápis', value: 200 }));

  budget.applyExtraDiscount();
  console.log(formatCurrency(budget.totalValue));
  budget.approve();

  budget.applyExtraDiscount();
  console.log(formatCurrency(budget.totalValue));

  budget.finalize();

  budget.applyExtraDiscount();
  budget.approve();
}

app();
