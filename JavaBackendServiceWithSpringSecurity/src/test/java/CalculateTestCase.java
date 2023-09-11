import com.calculator.CalculationModel;

public class CalculateTestCase {
    private CalculationModel[] inputCalculationModels;
    private double expectedResult;

    public CalculateTestCase(CalculationModel[] inputCalculationModels, double expectedResult) {
        this.inputCalculationModels = inputCalculationModels;
        this.expectedResult = expectedResult;
    }

    public CalculationModel[] getInputButtons() {
        return inputCalculationModels;
    }

    public double getExpectedResult() {
        return expectedResult;
    }
}
