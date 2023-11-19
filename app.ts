import { BonusAccount } from './class/BonusAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leandro', 10)
peopleAccount.deposit(100)
peopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount('Leandro PJ', 20, 1234567890)
companyAccount.deposit(200)
companyAccount.getBalance()
companyAccount.getLoan(1000, 3)
companyAccount.getLoanBalance()

const bonusAccount: BonusAccount = new BonusAccount('Leandro Bonus', 30)
bonusAccount.deposit(300)
bonusAccount.getBalance()