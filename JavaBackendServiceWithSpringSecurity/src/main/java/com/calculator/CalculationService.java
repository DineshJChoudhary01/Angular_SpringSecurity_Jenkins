package com.calculator;

import java.io.IOException;

public class CalculationService {

    double initialValue = 0.0;
    public double performOperation(double operand1, double operand2, String operation) {
        switch (operation) {
            case "ADDITION":
                return operand1 + operand2;
            case "SUBTRACTION":
                return operand1 - operand2;
            case "MULTIPLICATION":
                return operand1 * operand2;
            case "DIVISION":
                if (operand2 != 0) {
                    return operand1 / operand2;
                } else {
                    throw new ArithmeticException("Division by zero");
                }
            default:
                throw new IllegalArgumentException("Unsupported operation: " + operation);
        }
    }
    public double calculate(CalculationModel[] calculationModels) throws IOException {

//        System.out.println(buttons[0]);
        if (calculationModels[0].type.equals("NUMBER")) {
            initialValue = Double.parseDouble(calculationModels[0].value);
        }

        String currentOperationString = "";
        for (int i = 0; i < calculationModels.length; i++) {

            if (i == 0) {
                continue;
            }

            String type = calculationModels[i].type;
            String stringValue = calculationModels[i].value;

            double value = 0.0;
            if (calculationModels[i].type.equals("NUMBER")) {
                value = Double.parseDouble(stringValue);
                initialValue= performOperation(initialValue, value, currentOperationString);
                currentOperationString = "";
            }
            if (calculationModels[i].type.equals("OPERATION")) {

                if (calculationModels[i - 1].value.equals("SUBTRACTION") && calculationModels[i].value.equals("ADDITION")) {
                    currentOperationString = "SUBTRACTION";
                } else if (calculationModels[i - 1].value.equals("SUBTRACTION") && calculationModels[i].value.equals("SUBTRACTION")) {
                    currentOperationString = "ADDITION";
                } else {
                    currentOperationString = stringValue;
                }
            }
        }

        return initialValue;
    }
}
