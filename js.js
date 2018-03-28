console.log('ok');

const h1 = document.body.children[0];
h1.textContent=  'Objetos';

document.querySelector('ol').innerHTML+='<li>meu list item</li>';

document.querySelector('p').parentElement.innerHTML +='<p>mais um irmão</p>';

const a= document.querySelector('aside');

const s= document.createElement('strong');
s.textContent= 'texto';

a.appendChild(s);

const input= document.querySelector('input');
const button= document.querySelector('button');
const ol= document.querySelector('ol');

button.addEventListener('click',function(evento) {
    // evitar a propagação do texto
    // na pratica: não enviar o formulário!
    evento.preventDefault();
    const texto= input.value;
    const li= `<li>${texto}</li>`;
    ol.innerHTML += li;
    input.value = '';
} )
