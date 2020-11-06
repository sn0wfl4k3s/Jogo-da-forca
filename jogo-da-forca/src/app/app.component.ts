import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  palavraEscolhida = 'cogumelo'.split('');
  palavrasSelecionadas: Array<string> = [];
  tentativa: string;
  acertou = false;

  jaSelecionado(letra: string): boolean {
    return this.palavrasSelecionadas.some(p => p.toUpperCase() === letra.toUpperCase());
  }

  selecionarLetra(letra: string): void {
    this.palavrasSelecionadas.push(letra);
  }

  chutaPalavra(): void {
    this.acertou = (this.tentativa === this.palavraEscolhida.join(''));
  }

}
