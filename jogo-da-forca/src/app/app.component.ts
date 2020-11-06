import { Component } from '@angular/core';
import { PalavraService } from './services/palavra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  alfabeto = 'abcdedfghijklmnopqrstuvwyz'.split('');
  palavraEscolhida = this.palavraService.obterPalavraAleatoria().split('');
  palavrasSelecionadas: Array<string> = [];
  partida = { seTerminou: false, seGanhou: false };
  numeroDeTentativas = 6;
  tentativa: string;

  constructor(private palavraService: PalavraService){}

  jaSelecionado(letra: string): boolean {
    return this.palavrasSelecionadas
      .some(p => this.palavraService.removerAcento(p) === this.palavraService.removerAcento(letra));
  }

  selecionarLetra(letra: string): void {
    this.palavrasSelecionadas.push(letra);
    if (!this.palavraEscolhida.some(p => p === letra)) {
      this.numeroDeTentativas -= 1;
    }
    if (this.numeroDeTentativas === 0) {
      this.partida.seTerminou = true;
    }
    if (this.palavraEscolhida.every(l => this.palavrasSelecionadas
        .some(p => this.palavraService.removerAcento(p) === this.palavraService.removerAcento(l)))) {
      this.partida.seTerminou = true;
      this.partida.seGanhou = true;
    }
  }

  chutaPalavra(): void {
    this.partida.seGanhou = (this.tentativa === this.palavraEscolhida.join(''));
    this.partida.seTerminou = true;
  }

  novaPartida(): void {
    this.palavraEscolhida = this.palavraService.obterPalavraAleatoria().split('');
    this.palavrasSelecionadas = [];
    this.partida = { seTerminou: false, seGanhou: false };
    this.numeroDeTentativas = 6;
    this.tentativa = '';
  }

}
