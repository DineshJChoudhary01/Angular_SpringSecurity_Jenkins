
import com.calculator.CalculationModel;
import com.calculator.CalculationService;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class TestCalculateMethodWithoutExcelData{

    @Test
    public void testCalculateWithAddition() throws IOException {
        CalculationModel[] calculationModels = {
                new CalculationModel("NUMBER", "25"),
                new CalculationModel("OPERATION", "ADDITION"),
                new CalculationModel("NUMBER", "365")
        };

        CalculationService calculator = new CalculationService();
        double result = calculator.calculate(calculationModels);
        assertEquals(390.0, result, 0.001);
    }

    @Test
    public void testCalculateWithSubtraction() throws IOException {
        CalculationModel[] calculationModels = {
                new CalculationModel("NUMBER", "25"),
                new CalculationModel("OPERATION", "SUBTRACTION"),
                new CalculationModel("NUMBER", "15")
        };

        CalculationService calculator = new CalculationService();
        double result = calculator.calculate(calculationModels);
        assertEquals(10.0, result, 0.001);
    }

    @Test
    public void testCalculateWithMultiplication() throws IOException {
        CalculationModel[] calculationModels = {
                new CalculationModel("NUMBER", "5"),
                new CalculationModel("OPERATION", "MULTIPLICATION"),
                new CalculationModel("NUMBER", "10")
        };

        CalculationService calculator = new CalculationService();
        double result = calculator.calculate(calculationModels);
        assertEquals(50.0, result, 0.001);
    }

    @Test
    public void testCalculateWithDivision() throws IOException {
        CalculationModel[] calculationModels = {
                new CalculationModel("NUMBER", "20"),
                new CalculationModel("OPERATION", "DIVISION"),
                new CalculationModel("NUMBER", "4")
        };

        CalculationService calculator = new CalculationService();
        double result = calculator.calculate(calculationModels);
        assertEquals(5.0, result, 0.001);
    }

    @Test
    public void testCalculateWithDivisionByZero() {
        CalculationModel[] calculationModels = {
                new CalculationModel("NUMBER", "10"),
                new CalculationModel("OPERATION", "DIVISION"),
                new CalculationModel("NUMBER", "0")
        };

        CalculationService calculator = new CalculationService();


        assertThrows(ArithmeticException.class, () -> calculator.calculate(calculationModels));
    }
}
