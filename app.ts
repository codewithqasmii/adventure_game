import chalk from "chalk"
import inquirer from "inquirer"
class Player {
    name: string
    fuel: number = 100
    constructor(name: string,) {
        this.name = name
    }
    fuelDecress() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
}

class Oppenent {
    name: string
    fuel: number = 100
    constructor(name: string,) {
        this.name = name
    }
    fuelDecress() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
//player name and opponent seletct
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name"
})

let oppenent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "select your opponent",
    choices: ["Skeleton", "Assassin", "Zonbie"]
})

//gather data
let p1 = new Player(player.name)
let o1 = new Player(oppenent.select)

do{
    
    if (oppenent.select == "Skeleton") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your opponent",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        })
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecress();
                console.log(chalk.bold.red`${p1.name} fuel is ${p1.fuel}`);
                console.log(chalk.bold.green`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You loose, Better luck next time"));
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecress();
                console.log(chalk.bold.green`${p1.name} fuel is ${p1.fuel}`);
                console.log(chalk.bold.red`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("you win"));
                    process.exit()
                }

            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${p1.fuel}`));

        }
        if (ask.opt == "Run for your life...") {
            console.log(chalk.bold.red.italic("You loose, Better luck next time"));
            process.exit()
        }
    }

    // Assassin
    if (oppenent.select == "Assassin") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your opponent",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        })
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecress();
                console.log(chalk.bold.red`${p1.name} fuel is ${p1.fuel}`);
                console.log(chalk.bold.green`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You loose, Better luck next time"));
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecress();
                console.log(chalk.bold.green`${p1.name} fuel is ${p1.fuel}`);
                console.log(chalk.bold.red`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("you win"));
                    process.exit()
                }

            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${p1.fuel}`));

        }
        if (ask.opt == "Run for your life...") {
            console.log(chalk.bold.red.italic("You loose, Better luck next time"));
            process.exit()
        }
    }

    // Zonbie
    if (oppenent.select == "Zonbie") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your opponent",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        })
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecress();
                console.log(chalk.bold.red`${p1.name} fuel is ${p1.fuel}`);
                console.log(chalk.bold.green`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You loose, Better luck next time"));
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecress();
                console.log(chalk.bold.green`${p1.name} fuel is ${p1.fuel}`);
                console.log(chalk.bold.red`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("you win"));
                    process.exit()
                }

            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${p1.fuel}`));

        }
        if (ask.opt == "Run for your life...") {
            console.log(chalk.bold.red.italic("You loose, Better luck next time"));
            process.exit()
        }
    }



}
while(true)




