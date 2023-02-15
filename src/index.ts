import prompts, { Choice } from 'prompts';
import { Budget } from './entities/Budget';
import { Tax } from './entities/Tax';
import { formatCurrency } from './utils/formatCurrency';

const availableTaxes = [
  new Tax({type: 'ICMS', aliquot: 17}),
  new Tax({type: 'ISS', aliquot: 5})
];

function getTax(taxes: string[]) {
  return availableTaxes.filter((tax) => taxes.includes(tax.type));
}

prompts.inject([ 50, getTax(['ICMS']) ]);

async function app() {
  console.clear();
  console.log('🚀 CALCULADORA DE ORÇAMENTOS');
  const res = await prompts([
    {
      type: 'number',
      name: 'budgetValue',
      message: 'Valor do orçamento: ',
      min: 0,
      validate: (value) => {
        if (value <= 0) {
          return 'Valor deve ser maior que zero.';
        }

        return true;
      }
    },
    {
      type: 'multiselect',
      name: 'taxes',
      message: 'Impostos',
      choices: availableTaxes.map((tax): Choice => ({title: `${tax.type} - ${tax.aliquot}%`, value: tax})),
    }
  ]);

  const budget = new Budget({value: res.budgetValue, tax: res.taxes});

  console.log(`💸 Valor Final: ${formatCurrency(budget.totalValue)}`);
}

app();

