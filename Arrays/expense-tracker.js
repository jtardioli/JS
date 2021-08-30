const account = {
    name: 'Joshua Tardioli',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({description: description, amount: amount})
    },
    addIncome: function (description, amount) {
        this.income.push({description: description, amount: amount})
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        
        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
            
        })
        this.income.forEach(function (payment) {
            totalIncome += payment.amount
        })
        let accountBalance = totalIncome - totalExpenses
        return `${this.name} has $${totalExpenses} in expenses and $${totalIncome}. The account balace is ${accountBalance}`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2.50)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
