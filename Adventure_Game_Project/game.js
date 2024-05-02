#! /usr/bin/env node.
import inquirer from "inquirer";
import chalk from "chalk";
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
///Questions Game Start
let answer = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter your Name :",
    transformer: (input) => {
        return chalk.italic.yellow(input);
    },
});
console.log(chalk.italic.yellow(answer.name));
let Opponent = await inquirer.prompt({
    name: "opp",
    type: "list",
    message: "Select your Opponent :",
    choices: ["Skeleton", "Assassian", "Zombie"],
});
let p1 = new player(answer.name);
let o1 = new opponent(Opponent.opp);
do {
    ///Skeleton
    if (Opponent.opp === "Skeleton") {
        let select = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select your Opponent :",
            choices: ["Attack", "Drink Portion", "Run for your life..."],
        });
        if (select.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose , Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("Congratulations You Win !"));
                    process.exit();
                }
            }
        }
        if (select.option === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion your Fuel is ${p1.fuel}`));
        }
        if (select.option === "Run for your life...") {
            console.log(chalk.bold.red.italic("You Loose , Better Luck Next Time !"));
            process.exit();
        }
    }
    ///Assassian
    if (Opponent.opp === "Assassian") {
        let select = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select your Opponent :",
            choices: ["Attack", "Drink Portion", "Run for your life..."],
        });
        if (select.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose , Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("Congratulations You Win !"));
                    process.exit();
                }
            }
        }
        if (select.option === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion your Fuel is ${p1.fuel}`));
        }
        if (select.option === "Run for your life...") {
            console.log(chalk.bold.red.italic("You Loose , Better Luck Next Time "));
            process.exit();
        }
    }
    ///zombie
    if (Opponent.opp === "Zombie") {
        let select = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select your Opponent :",
            choices: ["Attack", "Drink Portion", "Run for your life..."],
        });
        if (select.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose , Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("Congratulations You Win !"));
                    process.exit();
                }
            }
        }
        if (select.option === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion your Fuel is ${p1.fuel}`));
        }
        if (select.option === "Run for your life...") {
            console.log(chalk.bold.red.italic("You Loose , Better Luck Next Time "));
            process.exit();
        }
    }
} while (true);
