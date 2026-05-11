package com.upiiz.calculadora.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CalculadoraController {
    @GetMapping
    public String mostrarCalc(){
        return "calculadora";
    }
}
