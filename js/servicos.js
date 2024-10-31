const servicos = [
    {
        nome: "Cafe da manhã",
        descricao: "Pães fresquinhos, croissants e café aromático. O jeito perfeito de começar o dia!",
        imagem: "../images/servicos/cafe.jpg"
    },
    {
        nome: "Almoço",
        descricao: "Refeição caseira com ingredientes frescos. Sabor e nutrição para o seu dia",
        imagem: "../images/servicos/almoco.jpg"
    },
    {
        nome: "Pizzas",
        descricao: "Massas finas e crocantes, cobertas com ingredientes frescos. O sabor que vai conquistar seu paladar",
        imagem: "../images/servicos/pizza.jpg"
    },
    {
        nome: "Bolos",
        descricao: "Deliciosos bolos fofinhos, cobertos com cremosas coberturas. A sobremesa perfeita para adoçar o seu dia",
        imagem: "../images/servicos/bolo.jpg"
    },
    {
        nome: "Salgados",
        descricao: "Salgados quentinhos e recheados, perfeitos para um lanche saboroso. Uma explosão de sabor em cada mordida",
        imagem: "../images/servicos/salgado.jpg"
    },
    {
        nome: "Hamburguers",
        descricao: "Suculentos hambúrgueres e sanduíches variados, feitos com ingredientes frescos. Uma explosão de sabor em cada mordida",
        imagem: "../images/servicos/hamburguer.jpg"
    },
    {
        nome: "Encomendas",
        descricao: "Bolos e salgados personalizados para sua festa. Fresquinhos e feitos com carinho",
        imagem: "../images/servicos/encomeda.jpg"
    },
    {
        nome: "Sopas",
        descricao: "Sopas e caldos quentinhos, reconfortantes e feitos com ingredientes frescos. O aconchego em cada colherada",
        imagem: "../images/servicos/sopa.jpg"
    },
    {
        nome: "Sushi",
        descricao: "Deliciosos sushis frescos, preparados com ingredientes de qualidade. Uma experiência única de sabor",
        imagem: "../images/servicos/sushi.jpg"
    }
]

const containerProdutos = document.querySelector("#conteiner-produtos")

servicos.forEach(element => {
    const { nome, imagem, descricao } = element

    const serviceContainer = document.createElement('div');
    serviceContainer.classList.add('service'); 

    const img = document.createElement('img');
    img.src = imagem || 'placeholder.jpg';
    serviceContainer.appendChild(img);

    const tituloDescricao = document.createElement('div');
    tituloDescricao.classList.add('titulo-descricao')
    const titulo = document.createElement('h1');
    titulo.textContent = nome;
    const p = document.createElement('p');
    p.textContent = descricao;

    tituloDescricao.appendChild(titulo);
    tituloDescricao.appendChild(p);
    serviceContainer.appendChild(tituloDescricao);

    containerProdutos.appendChild(serviceContainer);
});