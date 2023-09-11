package com.calculator;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(value = "/calc3")
public class CalculationController extends HttpServlet {
    double initialValue = 0.0;
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        BufferedReader reader = request.getReader();
        StringBuilder requestBody = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            requestBody.append(line);
        }

        Gson gson = new Gson();
        CalculationModel[] calculationModels = gson.fromJson(requestBody.toString(), CalculationModel[].class);

        CalculationService calculationService = new CalculationService();
        initialValue = calculationService.calculate(calculationModels);

        response.setContentType("text");
        PrintWriter out = response.getWriter();

        out.print(initialValue);
        initialValue = 0;
        response.setStatus(HttpServletResponse.SC_OK);
    }


}

