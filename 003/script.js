// Espera o HTML carregar completamente (boa prática)
document.addEventListener('DOMContentLoaded', function() {
    
    // --- INTERATIVIDADE 1: NOTIFICAÇÃO E CARRINHO DINÂMICO ---
    
    // Seleciona os elementos que vamos manipular
    const buyButtons = document.querySelectorAll('.buy-button');
    const cartCountElement = document.getElementById('cart-count');
    
    // Variável para guardar a contagem de itens no carrinho
    let cartItemCount = 0;

    // Função para mostrar notificação
    function showNotification(productName) {
        // 1. Cria um novo elemento <div>
        const notification = document.createElement('div');
        // 2. Adiciona a classe 'notification' para estilizar com o CSS
        notification.classList.add('notification');
        // 3. Define o texto da notificação
        notification.textContent = `"${productName}" foi adicionado ao carrinho!`;
        // 4. Adiciona a notificação ao corpo da página
        document.body.appendChild(notification);
        // 5. Remove a notificação após 3 segundos
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Passa por cada botão "Comprar" e adiciona a funcionalidade
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aumenta o contador do carrinho
            cartItemCount++;
            
            // Atualiza o número no ícone do carrinho
            cartCountElement.textContent = cartItemCount;

            // Animação de "pop" no contador
            cartCountElement.classList.add('updated');
            setTimeout(() => {
                cartCountElement.classList.remove('updated');
            }, 200); // Remove a classe após a animação

            // Pega o nome do produto
            const productCard = button.closest('.product-card');
            const productTitle = productCard.querySelector('.product-title').textContent;

            // Mostra a notificação customizada
            showNotification(productTitle);
        });
    });

    // --- INTERATIVIDADE 2: MODAL DE IMAGEM DO PRODUTO ---

    // Seleciona os elementos do modal e as imagens dos produtos
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close-button');
    const productImages = document.querySelectorAll('.product-card img');

    // Adiciona um evento de clique a cada imagem de produto
    productImages.forEach(img => {
        img.addEventListener('click', function() {
            // 1. Mostra o modal (adicionando a classe 'visible')
            modal.classList.add('visible');
            // 2. Coloca a imagem clicada dentro do modal
            modalImage.src = this.src;
        });
    });

    // Função para fechar o modal
    function closeModal() {
        modal.classList.remove('visible');
    }

    // Fecha o modal ao clicar no botão "X"
    closeButton.addEventListener('click', closeModal);

    // Fecha o modal ao clicar fora da imagem (no fundo escuro)
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

});