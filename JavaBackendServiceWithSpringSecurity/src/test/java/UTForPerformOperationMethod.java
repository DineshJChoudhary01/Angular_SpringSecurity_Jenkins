import com.calculator.CalculationService;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.io.FileInputStream;
import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UTForPerformOperationMethod {

    private static Workbook workbook;
    private static Sheet sheet;

    @BeforeAll
    public static void setUp() throws IOException {

        FileInputStream fileInputStream = new FileInputStream("operation_test_data.xlsx");
        workbook = new XSSFWorkbook(fileInputStream);

        sheet = workbook.getSheet("TestData");
    }

    @Test
    public void testCalculatorWithExcelData() {
        for (Row row : sheet) {
            if (row.getRowNum() == 0) {
                continue;
            }

            double operand1 = row.getCell(0).getNumericCellValue();
            double operand2 = row.getCell(1).getNumericCellValue();
            String operation = row.getCell(2).getStringCellValue();
            double expected = row.getCell(3).getNumericCellValue();

            CalculationService calculator = new CalculationService();
            double result = calculator.performOperation(operand1, operand2, operation);
            System.out.println(result);
            assertEquals(expected, result);
        }
    }
}
