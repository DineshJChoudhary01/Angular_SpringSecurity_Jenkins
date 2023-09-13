import com.calculator.CalculationModel;
import com.calculator.CalculationService;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public class IntegrationTest {
    private CalculationService calculationService;

    @Before
    public void setUp() {

        calculationService = new CalculationService();
    }


    @Test
    public void testCalculateWithModel() throws IOException {

        CalculationModel[] calculationModels = new CalculationModel[]{
                new CalculationModel("NUMBER", "2.0"),
                new CalculationModel("OPERATION", "ADDITION"),
                new CalculationModel("NUMBER", "3.0")
        };

        double result = calculationService.calculate(calculationModels);
        assertEquals(5.0, result, 0.001);
    }


    @Test
    public void testAddition() {
        double result = calculationService.performOperation(2.0, 3.0, "ADDITION");
        assertEquals(5.0, result, 0.001);
    }

    @Test
    public void testDivision() {
        double result = calculationService.performOperation(6.0, 2.0, "DIVISION");
        assertEquals(3.0, result, 0.001);
    }




}

