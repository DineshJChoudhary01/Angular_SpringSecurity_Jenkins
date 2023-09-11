

import com.calculator.CalculationService;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UnitTest {

    @Test
    public void testPerformAddition() {
        CalculationService calculator = new CalculationService();
        double result = calculator.performOperation(5.0, 3.0, "ADDITION");
        assertEquals(8.0, result);
    }

    @Test
    public void testPerformSubtraction() {
        CalculationService calculator = new CalculationService();
        double result = calculator.performOperation(2.0, 1.0, "SUBTRACTION");
        assertEquals(1.0, result);
    }

    @Test
    public void testPerformMultiplication() {
        CalculationService calculator = new CalculationService();
        double result = calculator.performOperation(9.0, 9.0, "MULTIPLICATION");
        assertEquals(81.0, result);
    }

    @Test
    public void testPerformDivision() {
        CalculationService calculator = new CalculationService();
        double result = calculator.performOperation(10.0, 2.0, "DIVISION");
        assertEquals(5.0, result);
    }


}
