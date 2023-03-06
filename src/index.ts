import { Budget } from './entities/Budget';
import { ICMS } from './entities/ICMS';
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
  budget.addItem(new Item({ desc: 'Lápis', value: 300 }));
  budget.addTax(new ICMS({ aliquot: 10 }));

  console.log(`💲 Valor Inicial: ${formatCurrency(budget.value)}`);
  console.log(`💸 Valor Final: ${formatCurrency(budget.totalValue)}`);
}

app();
