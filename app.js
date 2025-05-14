let denilsonPV;
let denilsonPVAntigo;
let denilsonPVAtual;
let denilsonPixel;
let alicePV;
let alicePixel;

function denilson() {
    document.getElementById("denilson").setAttribute("class","");
    document.getElementById("denilsonFooter").setAttribute("class","");
    document.getElementById("alice").setAttribute("class","secreto");
    document.getElementById("aliceFooter").setAttribute("class","secreto");
}

function alice() {
    document.getElementById("alice").setAttribute("class","");
    document.getElementById("aliceFooter").setAttribute("class","");
    document.getElementById("denilson").setAttribute("class","secreto");
    document.getElementById("denilsonFooter").setAttribute("class","secreto");
}

function converterDenilsonPV() {
    denilsonPV = parseInt(document.getElementById("denilsonPV").value);
    denilsonAltura = obterAltura(denilsonPV).toFixed(2);
    document.getElementById("denilsonAltura").value = denilsonAltura;
    corrigirPixelDenilson();
    definirPontosDenilson();
}

function converterDenilsonAltura() {
    denilsonAltura = parseFloat(document.getElementById("denilsonAltura").value);
    denilsonPV = obterPV(denilsonAltura).toFixed(0);
    document.getElementById("denilsonPV").value = denilsonPV;
    corrigirPixelDenilson();
    definirPontosDenilson();
}

function obterAltura(pv) {
    return pv * 0.07;
}

function obterPV(altura) {
    return altura / 0.07;
}

function corrigirPixelDenilson() {
    denilsonPixel = 7 * denilsonPV;
    if (denilsonPixel > 200) {
      pixel = 170 - (denilsonPixel - 200)/(0.04 * denilsonPV);
      if (pixel < 0) {
        pixel = 0;
      }
      document.getElementById("denilsonImg").setAttribute("width","200px");
      document.getElementById("figura1Img").setAttribute("width",pixel);
    } else {
        pixel = denilsonPixel;
        if (pixel < 0) {
            pixel = 0;
        }
        document.getElementById("figura1Img").setAttribute("width","170px");
        document.getElementById("denilsonImg").setAttribute("width",pixel);
    }
}

function definirPontosDenilson() {
    if (denilsonAltura <= 0.10) {
        document.getElementById("classificacaoDenilson").innerHTML = "Diminuto";
        document.getElementById("defesaDenilson").innerHTML = "+5 de Defesa";
        document.getElementById("defesaDenilson").setAttribute("class","positivo");
        document.getElementById("destrezaDenilson").innerHTML = "+5 em Perícias de Destreza";
        document.getElementById("destrezaDenilson").setAttribute("class","positivo");
        document.getElementById("forcaDenilson").innerHTML = "-5 em Perícias de Força";
        document.getElementById("forcaDenilson").setAttribute("class","negativo");
        document.getElementById("protecaoDenilson").innerHTML = "Penalidade no Uso de Proteções";
        document.getElementById("protecaoDenilson").setAttribute("class","negativo");
        document.getElementById("armasDenilson").innerHTML = "Penalidade no Uso de Armas";
        document.getElementById("armasDenilson").setAttribute("class","negativo");
        document.getElementById("socoDenilson").innerHTML = "-1d10 de Dano de Soco";
        document.getElementById("socoDenilson").setAttribute("class","negativo");
    } else if (denilsonAltura > 0.10 && denilsonAltura <= 0.60) {
        document.getElementById("classificacaoDenilson").innerHTML = "Minúsculo";
        document.getElementById("defesaDenilson").innerHTML = "+3 de Defesa";
        document.getElementById("defesaDenilson").setAttribute("class","positivo");
        document.getElementById("destrezaDenilson").innerHTML = "+3 em Perícias de Destreza";
        document.getElementById("destrezaDenilson").setAttribute("class","positivo");
        document.getElementById("forcaDenilson").innerHTML = "-3 em Perícias de Força";
        document.getElementById("forcaDenilson").setAttribute("class","negativo");
        document.getElementById("protecaoDenilson").innerHTML = "Penalidade no Uso de Proteções";
        document.getElementById("protecaoDenilson").setAttribute("class","negativo");
        document.getElementById("armasDenilson").innerHTML = "Penalidade no Uso de Armas que não sejam Leves";
        document.getElementById("armasDenilson").setAttribute("class","negativo");
        document.getElementById("socoDenilson").innerHTML = "-1d6 de Dano de Soco";
        document.getElementById("socoDenilson").setAttribute("class","negativo");
    } else if (denilsonAltura > 0.60 && denilsonAltura <= 1.40) {
        document.getElementById("classificacaoDenilson").innerHTML = "Pequeno";
        document.getElementById("defesaDenilson").innerHTML = "+1 de Defesa";
        document.getElementById("defesaDenilson").setAttribute("class","positivo");
        document.getElementById("destrezaDenilson").innerHTML = "+1 em Perícias de Destreza";
        document.getElementById("destrezaDenilson").setAttribute("class","positivo");
        document.getElementById("forcaDenilson").innerHTML = "-1 em Perícias de Força";
        document.getElementById("forcaDenilson").setAttribute("class","negativo");
        document.getElementById("protecaoDenilson").innerHTML = "Penalidade no Uso de Proteções que não sejam Leves";
        document.getElementById("protecaoDenilson").setAttribute("class","negativo");
        document.getElementById("armasDenilson").setAttribute("class","negativo");
        document.getElementById("armasDenilson").innerHTML = "Penalidade no Uso de Armas de Duas Mãos";
        document.getElementById("socoDenilson").innerHTML = "-1d2 de Dano de Soco";
        document.getElementById("socoDenilson").setAttribute("class","negativo");
    } else if (denilsonAltura > 1.40 && denilsonAltura <= 2.10) {
        document.getElementById("classificacaoDenilson").innerHTML = "Médio";
        document.getElementById("defesaDenilson").innerHTML = "";
        document.getElementById("destrezaDenilson").innerHTML = "";
        document.getElementById("forcaDenilson").innerHTML = "";
        document.getElementById("protecaoDenilson").innerHTML = "";
        document.getElementById("armasDenilson").innerHTML = "";
        document.getElementById("socoDenilson").innerHTML = "";
    } else if (denilsonAltura > 2.10 && denilsonAltura <= 3.00) {
        document.getElementById("classificacaoDenilson").innerHTML = "Grande";
        document.getElementById("defesaDenilson").innerHTML = "-1 de Defesa";
        document.getElementById("defesaDenilson").setAttribute("class","negativo");
        document.getElementById("destrezaDenilson").innerHTML = "-1 em Perícias de Destreza";
        document.getElementById("destrezaDenilson").setAttribute("class","negativo");
        document.getElementById("forcaDenilson").innerHTML = "+1 em Perícias de Força";
        document.getElementById("forcaDenilson").setAttribute("class","positivo");
        document.getElementById("protecaoDenilson").innerHTML = "Penalidade no Uso de Proteções que não sejam Médias";
        document.getElementById("protecaoDenilson").setAttribute("class","negativo");
        document.getElementById("armasDenilson").innerHTML = "";
        document.getElementById("socoDenilson").innerHTML = "+1d4 de Dano de Soco";
        document.getElementById("socoDenilson").setAttribute("class","positivo");
    } else if (denilsonAltura > 3.00 && denilsonAltura <= 5.00) {
        document.getElementById("classificacaoDenilson").innerHTML = "Enorme";
        document.getElementById("defesaDenilson").innerHTML = "-3 de Defesa";
        document.getElementById("defesaDenilson").setAttribute("class","negativo");
        document.getElementById("destrezaDenilson").innerHTML = "-3 em Perícias de Destreza";
        document.getElementById("destrezaDenilson").setAttribute("class","negativo");
        document.getElementById("forcaDenilson").innerHTML = "+3 em Perícias de Força";
        document.getElementById("forcaDenilson").setAttribute("class","positivo");
        document.getElementById("protecaoDenilson").innerHTML = "Penalidade no Uso de Proteções que não sejam Médias";
        document.getElementById("protecaoDenilson").setAttribute("class","negativo");
        document.getElementById("armasDenilson").innerHTML = "";
        document.getElementById("socoDenilson").innerHTML = "+1d6 de Dano de Soco";
        document.getElementById("socoDenilson").setAttribute("class","positivo");
    } else if (denilsonAltura > 5.00 && denilsonAltura <= 10.00) {
        document.getElementById("classificacaoDenilson").innerHTML = "Imenso";
        document.getElementById("defesaDenilson").innerHTML = "-5 de Defesa";
        document.getElementById("defesaDenilson").setAttribute("class","negativo");
        document.getElementById("destrezaDenilson").innerHTML = "-5 em Perícias de Destreza";
        document.getElementById("destrezaDenilson").setAttribute("class","negativo");
        document.getElementById("forcaDenilson").innerHTML = "+5 em Perícias de Força";
        document.getElementById("forcaDenilson").setAttribute("class","positivo");
        document.getElementById("protecaoDenilson").innerHTML = "";
        document.getElementById("armasDenilson").innerHTML = "";
        document.getElementById("socoDenilson").innerHTML = "+1d10 de Dano de Soco";
        document.getElementById("socoDenilson").setAttribute("class","positivo");
    } else if (denilsonAltura > 10.00) {
        document.getElementById("classificacaoDenilson").innerHTML = "Colossal";
        document.getElementById("defesaDenilson").innerHTML = "-8 de Defesa";
        document.getElementById("defesaDenilson").setAttribute("class","negativo");
        document.getElementById("destrezaDenilson").innerHTML = "-8 em Perícias de Destreza";
        document.getElementById("destrezaDenilson").setAttribute("class","negativo");
        document.getElementById("forcaDenilson").innerHTML = "+8 em Perícias de Força";
        document.getElementById("forcaDenilson").setAttribute("class","positivo");
        document.getElementById("protecaoDenilson").innerHTML = "";
        document.getElementById("armasDenilson").innerHTML = "";
        document.getElementById("socoDenilson").innerHTML = "+2d6 de Dano de Soco";
        document.getElementById("socoDenilson").setAttribute("class","positivo");
    }
}

function converterAlicePV() {
    alicePV = parseInt(document.getElementById("alicePV").value);
    aliceAltura = obterAlturaAlice(alicePV).toFixed(2);
    console.log(aliceAltura);
    document.getElementById("aliceAltura").value = aliceAltura;
    corrigirPixelAlice();
    definirPontosAlice();
}

function converterAliceAltura() {
    aliceAltura = parseFloat(document.getElementById("aliceAltura").value);
    alicePV = obterPVAlice(aliceAltura).toFixed(0);
    document.getElementById("alicePV").value = alicePV;
    corrigirPixelAlice();
    definirPontosAlice();
}

function obterAlturaAlice(pv) {
    return pv * 0.0736842105;
}

function obterPVAlice(altura) {
    return altura / 0.0736842105;
}

function corrigirPixelAlice() {
    alicePixel = 7 * (alicePV * 1.4);
    if (alicePixel > 280) {
      pixel = 170 - (alicePixel - 280)/(0.056 * alicePV);
      if (pixel < 0) {
        pixel = 0;
      }
      document.getElementById("aliceImg").setAttribute("width","280px");
      document.getElementById("figura2Img").setAttribute("width",pixel);
    } else {
        pixel = alicePixel;
        if (pixel < 0) {
            pixel = 0;
        }
        document.getElementById("figura2Img").setAttribute("width","170px");
        document.getElementById("aliceImg").setAttribute("width",pixel);
    }
}

function definirPontosAlice() {
    if (aliceAltura <= 0.10) {
        document.getElementById("classificacaoAlice").innerHTML = "Diminuto";
        document.getElementById("defesaAlice").innerHTML = "+5 de Defesa";
        document.getElementById("defesaAlice").setAttribute("class","positivo");
        document.getElementById("destrezaAlice").innerHTML = "+5 em Perícias de Destreza";
        document.getElementById("destrezaAlice").setAttribute("class","positivo");
        document.getElementById("forcaAlice").innerHTML = "-5 em Perícias de Força";
        document.getElementById("forcaAlice").setAttribute("class","negativo");
        document.getElementById("protecaoAlice").innerHTML = "Penalidade no Uso de Proteções";
        document.getElementById("protecaoAlice").setAttribute("class","negativo");
        document.getElementById("armasAlice").innerHTML = "Penalidade no Uso de Armas";
        document.getElementById("armasAlice").setAttribute("class","negativo");
        document.getElementById("socoAlice").innerHTML = "-1d10 de Dano de Soco";
        document.getElementById("socoAlice").setAttribute("class","negativo");
    } else if (aliceAltura > 0.10 && aliceAltura <= 0.60) {
        document.getElementById("classificacaoAlice").innerHTML = "Minúsculo";
        document.getElementById("defesaAlice").innerHTML = "+3 de Defesa";
        document.getElementById("defesaAlice").setAttribute("class","positivo");
        document.getElementById("destrezaAlice").innerHTML = "+3 em Perícias de Destreza";
        document.getElementById("destrezaAlice").setAttribute("class","positivo");
        document.getElementById("forcaAlice").innerHTML = "-3 em Perícias de Força";
        document.getElementById("forcaAlice").setAttribute("class","negativo");
        document.getElementById("protecaoAlice").innerHTML = "Penalidade no Uso de Proteções";
        document.getElementById("protecaoAlice").setAttribute("class","negativo");
        document.getElementById("armasAlice").innerHTML = "Penalidade no Uso de Armas que não sejam Leves";
        document.getElementById("armasAlice").setAttribute("class","negativo");
        document.getElementById("socoAlice").innerHTML = "-1d6 de Dano de Soco";
        document.getElementById("socoAlice").setAttribute("class","negativo");
    } else if (aliceAltura > 0.60 && aliceAltura <= 1.40) {
        document.getElementById("classificacaoAlice").innerHTML = "Pequeno";
        document.getElementById("defesaAlice").innerHTML = "+1 de Defesa";
        document.getElementById("defesaAlice").setAttribute("class","positivo");
        document.getElementById("destrezaAlice").innerHTML = "+1 em Perícias de Destreza";
        document.getElementById("destrezaAlice").setAttribute("class","positivo");
        document.getElementById("forcaAlice").innerHTML = "-1 em Perícias de Força";
        document.getElementById("forcaAlice").setAttribute("class","negativo");
        document.getElementById("protecaoAlice").innerHTML = "Penalidade no Uso de Proteções que não sejam Leves";
        document.getElementById("protecaoAlice").setAttribute("class","negativo");
        document.getElementById("armasAlice").setAttribute("class","negativo");
        document.getElementById("armasAlice").innerHTML = "Penalidade no Uso de Armas de Duas Mãos";
        document.getElementById("socoAlice").innerHTML = "-1d2 de Dano de Soco";
        document.getElementById("socoAlice").setAttribute("class","negativo");
    } else if (aliceAltura > 1.40 && aliceAltura <= 2.10) {
        document.getElementById("classificacaoAlice").innerHTML = "Médio";
        document.getElementById("defesaAlice").innerHTML = "";
        document.getElementById("destrezaAlice").innerHTML = "";
        document.getElementById("forcaAlice").innerHTML = "";
        document.getElementById("protecaoAlice").innerHTML = "";
        document.getElementById("armasAlice").innerHTML = "";
        document.getElementById("socoAlice").innerHTML = "";
    } else if (aliceAltura > 2.10 && aliceAltura <= 3.00) {
        document.getElementById("classificacaoAlice").innerHTML = "Grande";
        document.getElementById("defesaAlice").innerHTML = "-1 de Defesa";
        document.getElementById("defesaAlice").setAttribute("class","negativo");
        document.getElementById("destrezaAlice").innerHTML = "-1 em Perícias de Destreza";
        document.getElementById("destrezaAlice").setAttribute("class","negativo");
        document.getElementById("forcaAlice").innerHTML = "+1 em Perícias de Força";
        document.getElementById("forcaAlice").setAttribute("class","positivo");
        document.getElementById("protecaoAlice").innerHTML = "Penalidade no Uso de Proteções que não sejam Médias";
        document.getElementById("protecaoAlice").setAttribute("class","negativo");
        document.getElementById("armasAlice").innerHTML = "";
        document.getElementById("socoAlice").innerHTML = "+1d4 de Dano de Soco";
        document.getElementById("socoAlice").setAttribute("class","positivo");
    } else if (aliceAltura > 3.00 && aliceAltura <= 5.00) {
        document.getElementById("classificacaoAlice").innerHTML = "Enorme";
        document.getElementById("defesaAlice").innerHTML = "-3 de Defesa";
        document.getElementById("defesaAlice").setAttribute("class","negativo");
        document.getElementById("destrezaAlice").innerHTML = "-3 em Perícias de Destreza";
        document.getElementById("destrezaAlice").setAttribute("class","negativo");
        document.getElementById("forcaAlice").innerHTML = "+3 em Perícias de Força";
        document.getElementById("forcaAlice").setAttribute("class","positivo");
        document.getElementById("protecaoAlice").innerHTML = "Penalidade no Uso de Proteções que não sejam Médias";
        document.getElementById("protecaoAlice").setAttribute("class","negativo");
        document.getElementById("armasAlice").innerHTML = "";
        document.getElementById("socoAlice").innerHTML = "+1d6 de Dano de Soco";
        document.getElementById("socoAlice").setAttribute("class","positivo");
    } else if (aliceAltura > 5.00 && aliceAltura <= 10.00) {
        document.getElementById("classificacaoAlice").innerHTML = "Imenso";
        document.getElementById("defesaAlice").innerHTML = "-5 de Defesa";
        document.getElementById("defesaAlice").setAttribute("class","negativo");
        document.getElementById("destrezaAlice").innerHTML = "-5 em Perícias de Destreza";
        document.getElementById("destrezaAlice").setAttribute("class","negativo");
        document.getElementById("forcaAlice").innerHTML = "+5 em Perícias de Força";
        document.getElementById("forcaAlice").setAttribute("class","positivo");
        document.getElementById("protecaoAlice").innerHTML = "";
        document.getElementById("armasAlice").innerHTML = "";
        document.getElementById("socoAlice").innerHTML = "+1d10 de Dano de Soco";
        document.getElementById("socoAlice").setAttribute("class","positivo");
    } else if (aliceAltura > 10.00) {
        document.getElementById("classificacaoAlice").innerHTML = "Colossal";
        document.getElementById("defesaAlice").innerHTML = "-8 de Defesa";
        document.getElementById("defesaAlice").setAttribute("class","negativo");
        document.getElementById("destrezaAlice").innerHTML = "-8 em Perícias de Destreza";
        document.getElementById("destrezaAlice").setAttribute("class","negativo");
        document.getElementById("forcaAlice").innerHTML = "+8 em Perícias de Força";
        document.getElementById("forcaAlice").setAttribute("class","positivo");
        document.getElementById("protecaoAlice").innerHTML = "";
        document.getElementById("armasAlice").innerHTML = "";
        document.getElementById("socoAlice").innerHTML = "+2d6 de Dano de Soco";
        document.getElementById("socoAlice").setAttribute("class","positivo");
    }
}

function atualizarDenilson() {
    denilsonPVAtual = parseInt(document.getElementById("denilsonPVAtual").value);
    denilsonPVAntigo = parseInt(document.getElementById("denilsonPVMaximo").value);
    document.getElementById("denilsonPVAtual").value = atualizacao(denilsonPVAtual, denilsonPV, denilsonPVAntigo).toFixed(0);
    document.getElementById("denilsonPVMaximo").value = denilsonPV;
}

function atualizarAlice() {
    alicePVAtual = parseInt(document.getElementById("alicePVAtual").value);
    alicePVAntigo = parseInt(document.getElementById("alicePVMaximo").value);
    document.getElementById("alicePVAtual").value = atualizacao(alicePVAtual, alicePV, alicePVAntigo).toFixed(0);
    document.getElementById("alicePVMaximo").value = alicePV;
}

function atualizacao(PVAtual, Pv, PVAntigo) {
    return (PVAtual * Pv) / PVAntigo;
}