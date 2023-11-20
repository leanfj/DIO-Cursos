import { DioAccount } from "./DioAccount";

type Parcela = {
  value: number;
  date: Date;
  status: boolean;
};

type LoanBalance = {
  value: number;
  date: Date;
  parcelas: Parcela[];
}[];

export class CompanyAccount extends DioAccount {
  private readonly cnpj: number;

  private loanBalance: LoanBalance = [];

  constructor(name: string, accountNumber: number, cnpj: number) {
    super(name, accountNumber);
    this.cnpj = cnpj;
  }

  getLoanBalance = (): void => {
    console.log(JSON.stringify(this.loanBalance, null, 2));
  };

  getCnpj = (): number => {
    return this.cnpj;
  };

  getLoan = (value: number, quantidadeParcelas: number): void => {
    this.deposit(value);
    this.addLoan(value, quantidadeParcelas);
    console.log(`Voce pegou um emprestimo de ${value}`);
  };

  private addLoan = (value: number, quantidadeParcelas: number): void => {
    const date = new Date();

    const parcelas: Parcela[] = [];

    for (let i = 0; i < quantidadeParcelas; i++) {
      const parcela = {
        value: value / quantidadeParcelas,
        date: new Date(date.getFullYear(), date.getMonth() + i, date.getDate()),
        status: false,
      };

      parcelas.push(parcela);
    }

    const loan = {
      value,
      date,
      parcelas,
    };

    this.loanBalance.push(loan);
  };
}
