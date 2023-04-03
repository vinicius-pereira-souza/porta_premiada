export default class PortaModel {
  #numero: number;
  #temPresente: boolean;
  #selecionada: boolean;
  #aberta: boolean;

  constructor(
    numero: number,
    temPresente = false,
    selecionada = false,
    aberta = false,
  ) {
    this.#numero = numero;
    this.#temPresente = temPresente;
    this.#selecionada = selecionada;
    this.#aberta = aberta;
  }

  get numero(): number {
    return this.#numero;
  }

  get temPresente(): boolean {
    return this.#temPresente;
  }

  get selecionada(): boolean {
    return this.#selecionada;
  }

  get aberta(): boolean {
    return this.#aberta;
  }

  get fechada(): boolean {
    return !this.#aberta;
  }

  desselecionar() {
    const seleciondada: boolean = false;

    return new PortaModel(
      this.numero,
      this.temPresente,
      seleciondada,
      this.aberta,
    );
  }

  alternarSelecao() {
    const seleciondada = !this.selecionada;

    return new PortaModel(
      this.numero,
      this.temPresente,
      seleciondada,
      this.aberta,
    );
  }

  abrir() {
    const aberta = true;

    return new PortaModel(
      this.numero,
      this.temPresente,
      this.selecionada,
      aberta,
    );
  }
}
