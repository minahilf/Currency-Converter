#!/usr/bin/env node
import inquirer from "inquirer";

const conversionRates = {
  USD: 1,
  PKR: 277.9,
  INR: 74.28, 
  AED: 3.67, 
  SAR: 3.75, 
};

function convertCurrency(amount: number, inputCurrency: "USD" | "PKR" | "INR" | "AED" | "SAR", outputCurrency: "USD" | "PKR" | "INR" | "AED" | "SAR"): number {
  const rate = conversionRates[outputCurrency]  / conversionRates[inputCurrency];
  return amount * rate;
}


  const currency = await inquirer.prompt([
    {
      name: "currentcurrency",
      type: "list",
      message: "Please, Enter the Currency you have!!",
      choices: ["USD", "PKR", "INR", "AED", "SAR"],
    },
    {
      name: "convertcurrency",
      type: "list",
      message: "Enter the Currency you want to Convert to!",
      choices: ["USD", "PKR", "INR", "AED", "SAR"],
    },
    {
      name: "amount",
      type: "number",
      message: "Enter the Amount!",
    },
  ]);

  const inputCurrency = currency.currentcurrency;
  const outputCurrency = currency.convertcurrency;
  const amount = currency.amount;

  const convertedAmount = convertCurrency(amount, inputCurrency, outputCurrency);
  console.log(`Your ${amount} ${inputCurrency} has been converted to ${convertedAmount.toFixed(2)} ${outputCurrency}.`);


