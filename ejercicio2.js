    let account = {
        owner: "Alex",
        accountBalance: 0,

        
        deposit: function (amount) {
            if (amount > 0) {
                this.accountBalance += amount;
                console.log(`You've made a deposit for US$${amount}. Current balance: US$${this.accountBalance}`);
            } else {
                console.log("The deposit must be higher than US$0.");
            }
        },

        
        extract: function (amount) {
            if (amount > 0 && amount <= this.accountBalance) {
                this.accountBalance -= amount;
                console.log(`US$${amount} have been extracted. Current accountBalance: ${this.accountBalance}`);
            } else {
                console.log("The amount must be higher than 0 and it cannot exceed the current account balance.");
            }
        },

        
        report: function () {
            console.log(`Owner: ${this.owner}. Current account balance: ${this.accountBalance}`);
        }
    };

    
    console.log("Current account description: ");
    account.report();
    console.log(" ")


    account.deposit(100);
    console.log(" ")


    account.extract(30);
    console.log(" ")

    console.log("Updated account description:");
    account.report();
