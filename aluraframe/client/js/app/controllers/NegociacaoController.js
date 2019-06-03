class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adicionar(event) {
        event.preventDefault();
        
        // Função com erro:
        // Necessário criar um objeto Date a partir da string da data retornada pelo inputData
        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}