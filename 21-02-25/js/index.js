function media() {
    total = 0
    for (i = 1; i < 4; i++) {
        v = document.getElementById('in' + i).value
        total += parseFloat(v);
    }
    m = total / 3
    if (m >= 7) {
        aprovacao = 'Aprovado'
    }
    else if (m >= 4) {
        aprovacao = 'Recuperação'
    }
    else {
        aprovacao = 'Reprovado'
    }
    document.getElementById('out').innerHTML = 'Media: ' + m + ' ' + aprovacao;
}
