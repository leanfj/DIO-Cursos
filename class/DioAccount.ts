export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  protected balance: number = 0
  protected status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + value
      console.log(`Você depositou ${value} - Saldo Atual: ${this.balance}`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.validateSaldo(value)){
      this.balance = this.balance - value
    }
    console.log(`Você sacou ${value} - Saldo Atual: ${this.balance}`)
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateSaldo = (value: number): boolean => {
    if (this.balance >= value) {
      return true
    }
    throw new Error('Saldo insuficiente')
  }


  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
