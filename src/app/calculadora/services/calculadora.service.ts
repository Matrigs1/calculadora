/**
 * Serviço responsável por executar as principais operações da
 * calculadora.
 *
 * @author Mateus Rodrigues<matrigslima@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  //define as constantes para identificar as operações
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que calcula uma operação matemática dando dois números.
   * Suporta as operações = Soma, Subtração, Divisão e Multiplicação.
   *
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser usada
   * @returns number Resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number{ //informando o tipo de retorno
    let resultado: number; //armazena o resultado da operação

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
