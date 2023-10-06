# Ranked Match Calculator 🎮

This project was developed as a challenge during the DIO Bootcamp. It classifies a hero based on their net victories (victories - defeats) into various ranks.

## Challenge Details 📝

Given the net victories a hero has achieved, the objective is to classify the hero into one of the following ranks:

- Net Victories < 10: Ferro
- Net Victories between 11 and 20: Bronze
- Net Victories between 21 and 50: Prata
- Net Victories between 51 and 80: Ouro
- Net Victories between 81 and 90: Diamante
- Net Victories between 91 and 100: Lendário
- Net Victories ≥ 101: Imortal

The output of the program will be: "O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}"

## Solution 🔍

The solution leverages arrays to store rank criteria, loops to traverse through the rank thresholds, and conditionals to determine and classify the hero's rank based on their net victories.