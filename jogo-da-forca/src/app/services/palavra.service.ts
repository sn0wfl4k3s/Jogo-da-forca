import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalavraService {

  constructor() { }

  obterPalavraAleatoria(): string {
    const palavras = [
      'cogumelo',
      'aniversário',
      'caneca',
      'copo',
      'computador',
      'boné',
      'amanhã',
      'garfo',
      'paralelepípedo',
      'abracadabra',
      'livro',
      'televisão',
      'celular',
    ];

    const indexAleatorio = Math.round(Math.random() * palavras.length);

    return palavras[indexAleatorio];
  }

  removerAcento(str: string): string {
    str = str.replace(/[àáâãäå]/, 'a');
    str = str.replace(/[éèë]/, 'e');
    str = str.replace(/[íìï]/, 'i');
    str = str.replace(/[óòöõ]/, 'o');
    str = str.replace(/[úùü]/, 'o');
    str = str.replace(/[ç]/, 'c');
    return str.replace(/[^a-z0-9]/gi, '');
  }

}
