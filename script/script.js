const comentarios = [];
const form = document.querySelector('#form');
const listaComentarios = document.querySelector('#listaComentarios');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = form.querySelector('#nome').value;
    const email = form.querySelector('#email').value;
    const mensagem = form.querySelector('#mensagem').value;

    const comentario = { nome, email, mensagem }
    comentarios.push(comentario);

    adicionarComentario();
    form.reset();
});
function adicionarComentario() {
    listaComentarios.innerHTML += '';
    for (let i = 0; i < comentarios.length; i++) {
        const comentario = comentarios[i];
        const card = document.createElement('div');
        card.classList.add('card');
        listaComentarios.innerHTML += `
            <div>
                <h3 style= color: #f0f0f0;> Nome: ${comentario.nome}</h3>
                <p style= color: #f0f0f0;> Email: ${comentario.email}</p>
            </div>
            <p style= color: #f0f0f0;> Comentou: <span> ${comentario.mensagem} </span></p><hr>`;
    }
}

document.getElementById('mudar-dark').addEventListener('click', function () {
    document.body.classList.toggle('dark');
    
})