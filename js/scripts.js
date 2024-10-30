document.addEventListener('DOMContentLoaded', () => {
    const portfolioContainer = document.getElementById('portfolio-container');

    const portfolios = [
        {
            name: 'Compañero 1',
            description: 'Descripción del trabajo de Compañero 1.',            
        },
        {
            name: 'Compañero 2',
            description: 'Descripción del trabajo de Compañero 2.',            
        },
        // Añade más compañeros aquí
    ];

    portfolios.forEach(portfolio => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');

        portfolioItem.innerHTML = `            
            <h2>${portfolio.name}</h2>
            <p>${portfolio.description}</p>
        `;

        portfolioContainer.appendChild(portfolioItem);
    });
});