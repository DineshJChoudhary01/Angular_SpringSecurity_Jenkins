package com.calculator;

public class CalculationModel {

    String type;
    String value;

    public CalculationModel(String type, String value) {
        this.type = type;
        this.value = value;
    }

    public CalculationModel() {
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Button{" +
                "type='" + type + '\'' +
                ", value='" + value + '\'' +
                '}';
    }
}

