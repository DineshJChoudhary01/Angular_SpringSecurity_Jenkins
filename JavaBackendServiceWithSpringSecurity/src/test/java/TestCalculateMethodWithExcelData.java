import com.calculator.CalculationModel;
import com.calculator.CalculationService;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonParser;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestCalculateMethodWithExcelData {

    private CalculationService servlet;

    @BeforeEach
    public void setUp() {
        servlet = new CalculationService();
    }

    @Test
    public void testCalculateWithExcelData() throws IOException {

        List<CalculateTestCase> testCases = readTestDataFromExcel("operation_test_data.xlsx", "TestData2");

        for (CalculateTestCase testCase : testCases) {
            CalculationModel[] calculationModels = testCase.getInputButtons();

            double result = servlet.calculate(calculationModels);

            double expected = testCase.getExpectedResult();

            System.out.println("Expected result: "+expected+", Actual result "+result);
            assertEquals(expected, result, 0.001);
        }
    }

    private List<CalculateTestCase> readTestDataFromExcel(String excelFilePath, String sheetName) throws IOException {
        List<CalculateTestCase> testCases = new ArrayList<>();
        FileInputStream excelFile = new FileInputStream(new File(excelFilePath));
        Workbook workbook = new XSSFWorkbook(excelFile);
        Sheet sheet = workbook.getSheet(sheetName);

        Iterator<Row> iterator = sheet.iterator();
        while (iterator.hasNext()) {
            Row currentRow = iterator.next();
            Cell inputCell = currentRow.getCell(0);
            Cell expectedCell = currentRow.getCell(1);

            String inputJson = inputCell.getStringCellValue();

            JsonArray jsonArray = new JsonParser().parse(inputJson).getAsJsonArray();
            double expected = expectedCell.getNumericCellValue();

            Gson gson = new Gson();

            CalculationModel[] inputCalculationModels = new Gson().fromJson(jsonArray, CalculationModel[].class);

            testCases.add(new CalculateTestCase(inputCalculationModels, expected));
        }

        workbook.close();
        excelFile.close();

        return testCases;
    }
}

