import { Budget } from './entities/Budget';
import { COFINS } from './entities/COFINS';
import { ICMS } from './entities/ICMS';
import { ISS } from './entities/ISS';
import { Item } from './entities/Item';
import { PIS } from './entities/PIS';
import { formatCurrency } from './utils/formatCurrency';

async function app() {
  console.clear();
  console.log('🚀 CALCULADORA DE ORÇAMENTOS\n');

  const budget = new Budget({});
  budget.addItem(new Item({ desc: 'Item 1', value: 50 }));
  budget.addItem(new Item({ desc: 'Item 2', value: 50 }));
  budget.addItem(new Item({ desc: 'Item 3', value: 50 }));
  budget.addItem(new Item({ desc: 'Item 4', value: 50 }));
  budget.addTax(new ICMS({ aliquot: 15 }));
  budget.addTax(new COFINS());
  budget.addTax(new ISS({ aliquot: 3.5 }));
  budget.addTax(new PIS({ aliquot: 2.1 }));

  budget.printItems();
  console.log();
  budget.printTaxes();
  console.log();
  console.log(`💲 Valor Inicial: ${formatCurrency(budget.value)}`);
  console.log(`💸 Valor Final: ${formatCurrency(budget.totalValue)}`);
}

app();
