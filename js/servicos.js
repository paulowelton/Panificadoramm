const servicos = [
    {
        nome: "Cafe da manhã",
        descricao: "Pães fresquinhos, croissants e café aromático. O jeito perfeito de começar o dia!",
        imagem: "../images/servicos/cafe.jpg",
        page: "../pages/cafeDaManha.html"
    },
    {
        nome: "Almoço",
        descricao: "Refeição caseira com ingredientes frescos. Sabor e nutrição para o seu dia",
        imagem: "../images/servicos/almoco.jpg",
        page: "../pages/almoco.html"
    },
    {
        nome: "Pizzas",
        descricao: "Massas finas e crocantes, cobertas com ingredientes frescos. O sabor que vai conquistar seu paladar",
        imagem: "../images/servicos/pizza.jpg",
        page: "../pages/pizzas.html"
    },
    {
        nome: "Bolos",
        descricao: "Deliciosos bolos fofinhos, cobertos com cremosas coberturas. A sobremesa perfeita para adoçar o seu dia",
        imagem: "../images/servicos/bolo.jpg",
        page: "../pages/bolos.html"
    },
    {
        nome: "Salgados",
        descricao: "Salgados quentinhos e recheados, perfeitos para um lanche saboroso. Uma explosão de sabor em cada mordida",
        imagem: "../images/servicos/salgado.jpg",
        page: "../pages/salgados.html"
    },
    {
        nome: "Hamburguers",
        descricao: "Suculentos hambúrgueres e sanduíches variados, feitos com ingredientes frescos. Uma explosão de sabor em cada mordida",
        imagem: "../images/servicos/hamburguer.jpg",
        page: "../pages/hamburguers.html"
    },
    {
        nome: "Encomendas",
        descricao: "Bolos e salgados personalizados para sua festa. Fresquinhos e feitos com carinho",
        imagem: "../images/servicos/encomeda.jpg",
        page: "../pages/encomendas.html"
    },
    {
        nome: "Sopas",
        descricao: "Sopas e caldos quentinhos, reconfortantes e feitos com ingredientes frescos. O aconchego em cada colherada",
        imagem: "../images/servicos/sopas.png",
        page: "../pages/sopas.html"
    },
    {
        nome: "Sushi",
        descricao: "Deliciosos sushis frescos, preparados com ingredientes de qualidade. Uma experiência única de sabor",
        imagem: "../images/servicos/sushi.jpg",
        page: "../pages/sushi.html"
    }
]

const containerProdutos = document.querySelector("#conteiner-produtos")

servicos.forEach(element => {
    const { nome, imagem, descricao, page } = element

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

    serviceContainer.addEventListener("click", ()=>{
        window.location.href = page
    });

    containerProdutos.appendChild(serviceContainer);
});