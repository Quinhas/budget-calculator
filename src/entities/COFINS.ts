import { Tax } from './Tax';

export class COFINS implements Tax {
  public calculateTaxValue(): number {
    return 10;
  }
}
