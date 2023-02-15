import { Budget } from './entities/Budget';
import { COFINS } from './entities/COFINS';
import { ICMS } from './entities/ICMS';
import { ISS } from './entities/ISS';
import { Item } from './entities/Item';
import { PIS } from './entities/PIS';
import { formatCurrency } from './utils/formatCurrency';

async function app() {
  console.clear();
  console.log('🚀 CALCULADORA DE ORÇAMENTOS');

  const budget = new Budget({});
  budget.addItem(new Item({ desc: 'Teste', value: 10 }));
  budget.addItem(new Item({ desc: 'Teste 1', value: 20 }));
  budget.addItem(new Item({ desc: 'Teste 2', value: 30 }));
  budget.addItem(new Item({ desc: 'Teste 3', value: 40 }));
  budget.addItem(new Item({ desc: 'Teste 4', value: 50 }));
  budget.addTax(new ICMS({ aliquot: 15 }));
  budget.addTax(new COFINS());
  budget.addTax(new ISS({ aliquot: 3.5 }));
  budget.addTax(new PIS({ aliquot: 2.1 }));

  console.log(`💸 Valor Final: ${formatCurrency(budget.totalValue)}`);
}

app();
