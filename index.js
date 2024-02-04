let entrada = document.getElementById('entradaDoTexto');
let criptografar = document.getElementById('botaoCriptografar');
let descriptografar = document.getElementById('botaoDescriptografar');
let saida = document.getElementById('saidaDoTexto');
let copiar = document.getElementById('botaoCopiar');

function criptografarTexto() {
    let textoEntrada = entrada.value;
    let textoCriptografado = textoEntrada

        .replaceAll(`a`, `ai`)
        .replaceAll(`e`, `enter`)
        .replaceAll(`i`, `imes`)
        .replaceAll(`o`, `ober`)
        .replaceAll(`u`, `ufat`);

    saida.value = textoCriptografado;

    document.getElementById('enabled').style.display = 'none';
    document.getElementById('texto1').style.display = 'none';
    document.getElementById('texto2').style.display = 'none';
    document.getElementById('botaoCopiar').style.display = 'show';
    document.getElementById('botaoCopiar').style.display = 'inherit';
    document.getElementById('saidaDoTexto').style.display = 'show';
    document.getElementById('saidaDoTexto').style.display = 'inherit';
}

function descriptografarTexto() {
    let textoEntrada = entrada.value;
    let textoDescriptografado = textoEntrada

        .replaceAll(/ai/g, `a`)
        .replaceAll(/enter/g, `e`) 
        .replaceAll(/imes/g, `i`)
        .replaceAll(/ober/g, `o`)
        .replaceAll(/ufat/g, `u`);

    saida.value = textoDescriptografado;

    document.getElementById('enabled').style.display = 'none';
    document.getElementById('texto1').style.display = 'none';
    document.getElementById('texto2').style.display = 'none';
    document.getElementById('botaoCopiar').style.display = 'show';
    document.getElementById('botaoCopiar').style.display = 'inherit';
    document.getElementById('saidaDoTexto').style.display = 'show';
    document.getElementById('saidaDoTexto').style.display = 'inherit';
}

function copiarTexto() {
    if (saida.value !== '') {
        
        saida.select();
        saida.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(saida.value);
        copiar.textContent = 'Copiado';

        setTimeout(function() {
            copiar.textContent = 'Copiar';
        }, 800);
    } 
}
