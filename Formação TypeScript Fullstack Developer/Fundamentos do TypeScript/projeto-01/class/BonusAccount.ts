import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    this.balance = this.balance + value + 10
    console.log(`Você depositou ${value} mais bonus de 10 - Saldo Atual: ${this.balance}`)
  }

}
