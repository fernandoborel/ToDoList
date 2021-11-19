let dados = [{
    "marca": "Toyota",
    "modelo": "Corolla",
    "imagem": "https://w1.pngwing.com/pngs/1/539/png-transparent-2014-toyota-corolla-car-2016-toyota-corolla-2013-toyota-corolla-altis-toyota-corolla-altis-v-sedan-frontwheel-drive-latest.png"
},
{
    "marca": "Fiat",
    "modelo": "Palio",
    "imagem": "https://img2.gratispng.com/20180611/zeu/kisspng-car-peugeot-rcz-fiat-palio-fiat-automobiles-jeep-cj-5b1f29a1e7a991.8980207115287689299489.jpg"
},
{
    "marca": "Land Rover",
    "modelo": "Evoque",
    "imagem": "https://img2.gratispng.com/20180630/yyt/kisspng-2012-land-rover-range-rover-evoque-2015-land-rover-5b38069908f213.6606243615303983610367.jpg"
},
{
    "marca": "Volkswagen",
    "modelo": "T-Cross",
    "imagem": "https://www.sanave.com.br/assets/uploads/nt_veiculos/91206-Imagem-topo.png?v=3"
}];

let infoDados = JSON.stringify(dados);
let dadosAtualizados = JSON.parse(infoDados);
let toyota = dadosAtualizados[0].modelo;
console.log(toyota);

dadosAtualizados.forEach(function() {
    //document.body.innerHTML += "<p>"+dadosAtualizados[0].marca+"</p>";
    document.body.innerHTML += "<p>"+toyota+"</p>";
    //document.body.innerHTML += "<img src='https://w1.pngwing.com/pngs/1/539/png-transparent-2014-toyota-corolla-car-2016-toyota-corolla-2013-toyota-corolla-altis-toyota-corolla-altis-v-sedan-frontwheel-drive-latest.png'>"+dadosAtualizados[0]+"</>";
});

const database = 'FeFFEr';

