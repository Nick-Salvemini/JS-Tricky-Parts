function createAccount(pin, initialDeposit = 0) {
    let balance = initialDeposit;
    let currentPin = pin;

    return {
        checkBalance: function (inputPin) {
            if (inputPin !== currentPin) return "Invalid PIN.";
            return `$${balance}`
        },
        deposit: function (inputPin, amount) {
            if (inputPin !== currentPin) return "Invalid PIN.";
            balance += amount;
            return `Succesfully deposited $${amount}. Current balance: $${balance}.`
        },
        withdraw: function (inputPin, amount) {
            if (inputPin !== currentPin) return "Invalid PIN.";
            if (amount > balance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled."
            }
            balance -= amount;
            return `Succesfully withdrew $${amount}. Current balance: $${balance}.`
        },
        changePin: function (oldPin, newPin) {
            if (oldPin !== currentPin) return "Invalid PIN.";
            currentPin = newPin;
            return "PIN successfully changed!"
        }
    }
}

module.exports = { createAccount };
