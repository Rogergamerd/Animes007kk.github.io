// ==================== BANCO DE DADOS DE ANIMES ====================
const animeDatabase = [
    {
        id: 1,
        title: "Attack on Titan",
        genre: ["Ação", "Fantasia"],
        year: 2013,
        episodes: 87,
        status: "Completo",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=400&h=500&fit=crop",
        description: "Em um mundo onde a humanidade vive atrás de muros gigantescos para se proteger de titãs humanoides que comem pessoas, um jovem chamado Eren Yeager promete vingança contra os titãs após ver sua mãe ser devorada. Ele se junta ao Corpo de Reconhecimento e descobre segredos surpreendentes sobre os titãs e o mundo.",
        popularity: 95
    },
    {
        id: 2,
        title: "Death Note",
        genre: ["Psicológico", "Thriller"],
        year: 2006,
        episodes: 37,
        status: "Completo",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1618519738194-b97a10dd4b12?w=400&h=500&fit=crop",
        description: "Um caderno sobrenatural que permite matar qualquer pessoa ao escrever seu nome cai nas mãos de um estudante gênio. Light Yagami usa o Death Note para eliminar criminosos e criar um novo mundo, mas logo é perseguido por um misterioso detetive conhecido como L.",
        popularity: 92
    },
    {
        id: 3,
        title: "Demon Slayer",
        genre: ["Ação", "Fantasia"],
        year: 2019,
        episodes: 55,
        status: "Em Andamento",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1577720643272-265a59368e3a?w=400&h=500&fit=crop",
        description: "Tanjiro Kamado é um menino que vive em uma aldeia montanhosa. Quando sua família é atacada por demônios, apenas sua irmã Nezuko sobrevive, mas se torna um demônio. Determinado a encontrar uma forma de a tornar humana novamente, Tanjiro treina para se tornar um Caçador de Demônios.",
        popularity: 88
    },
    {
        id: 4,
        title: "One Piece",
        genre: ["Ação", "Aventura"],
        year: 1999,
        episodes: 1000,
        status: "Em Andamento",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1578996449935-c888f47e058f?w=400&h=500&fit=crop",
        description: "Monkey D. Luffy sonha em se tornar o Rei dos Piratas e encontrar o lendário tesouro One Piece. Ele viaja pelo mundo montado em seu barco pirata recrutando uma tripulação dedicada e enfrentando as forças do governo mundial.",
        popularity: 97
    },
    {
        id: 5,
        title: "Naruto",
        genre: ["Ação", "Aventura"],
        year: 2002,
        episodes: 720,
        status: "Completo",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578996449935-c888f47e058f?w=400&h=500&fit=crop",
        description: "Naruto Uzumaki é um jovem ninja que foi desprezado por sua aldeia após um ataque de um demônio raposa de nove caudas. Determinado a ser reconhecido, ele treina para se tornar Hokage, o líder de sua aldeia.",
        popularity: 90
    },
    {
        id: 6,
        title: "Steins;Gate",
        genre: ["Ficção Científica", "Thriller"],
        year: 2011,
        episodes: 24,
        status: "Completo",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=400&h=500&fit=crop",
        description: "Rintaro Okabe, um cientista amador, descobre como usar um microondas e um telefone celular para enviar mensagens para o passado. Ele e seus amigos viajam no tempo tentando evitar uma organização internacional malévola.",
        popularity: 89
    },
    {
        id: 7,
        title: "Fullmetal Alchemist",
        genre: ["Ação", "Fantasia"],
        year: 2005,
        episodes: 51,
        status: "Completo",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=400&h=500&fit=crop",
        description: "Dois irmãos, Edward e Alphonse Elric, tentam usar a alquimia proibida para ressuscitar sua mãe. No processo, Edward perde seu braço e sua perna, enquanto Alphonse perde seu corpo inteiro. Eles buscam a Pedra Filosofal para restaurar seus corpos.",
        popularity: 87
    },
    {
        id: 8,
        title: "Tokyo Ghoul",
        genre: ["Ação", "Horror"],
        year: 2014,
        episodes: 48,
        status: "Completo",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=400&h=500&fit=crop",
        description: "Kaneki Ken é um adolescente normal até sofrer um acidente que o transforma em um meio-ghoul. Ele precisa aprender a viver entre os ghouls enquanto tenta manter sua humanidade.",
        popularity: 85
    },
    {
        id: 9,
        title: "Mob Psycho 100",
        genre: ["Ação", "Comédia"],
        year: 2016,
        episodes: 25,
        status: "Completo",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=400&h=500&fit=crop",
        description: "Shigeo Kageyama, mais conhecido como Mob, é um adolescente tímido com poderes psíquicos incríveis. Ele tenta levar uma vida escolar normal enquanto gerencia seus poderes cada vez mais poderosos.",
        popularity: 84
    },
    {
        id: 10,
        title: "Code Geass",
        genre: ["Ficção Científica", "Ação"],
        year: 2006,
        episodes: 50,
        status: "Completo",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=400&h=500&fit=crop",
        description: "Lelouch vi Britannia é um exilado que ganha o poder sobrenatural de compelir qualquer um a obedecer seus comandos. Ele usa este poder para conquistar o mundo e criar um novo futuro.",
        popularity: 86
    },
    {
        id: 11,
        title: "Re:ZERO",
        genre: ["Ficção Científica", "Romance"],
        year: 2016,
        episodes: 50,
        status: "Em Andamento",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=400&h=500&fit=crop",
        description: "Subaru Natsuki é transportado para um mundo de fantasia e descobre que tem a habilidade de voltar ao passado quando morre, mas apenas ele se lembra dos eventos anteriores.",
        popularity: 82
    },
    {
        id: 12,
        title: "Jujutsu Kaisen",
        genre: ["Ação", "Fantasia"],
        year: 2020,
        episodes: 47,
        status: "Em Andamento",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=400&h=500&fit=crop",
        description: "Yuji Itadori é um adolescente comum que engole uma maldição, tornando-se o hospedeiro de um poderoso espírito maldito. Ele se junta a uma escola de magia jujutsu para aprender a controlar seus poderes e derrotar espíritos malditos.",
        popularity: 91
    }
];

// ==================== ESTADO GLOBAL ====================
let currentCategory = null;
let favorites = JSON.parse(localStorage.getItem('animeFavorites')) || [];
let currentAnimeId = null;

// ==================== ELEMENTOS DO DOM ====================
const trendingGrid = document.getElementById('trendingGrid');
const bestRatedGrid = document.getElementById('bestRatedGrid');
const favoritesGrid = document.getElementById('favoritesGrid');
const modal = document.getElementById('animeModal');
const modalClose = document.getElementById('modalClose');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryCards = document.querySelectorAll('.category-card');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');
const scrollToTopBtn = document.getElementById('scrollToTop');

// ==================== FUNÇÕES DE RENDERIZAÇÃO ====================

function renderAnimeCards(animes, container) {
    container.innerHTML = '';
    
    if (animes.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>Nenhum anime encontrado</p>
                <small>Tente ajustar seus filtros de busca</small>
            </div>
        `;
        return;
    }

    animes.forEach((anime, index) => {
        const card = createAnimeCard(anime);
        container.appendChild(card);
        setTimeout(() => {
            card.style.animation = 'slideUp 0.6s ease-out forwards';
            card.style.animationDelay = `${index * 0.05}s`;
        }, 10);
    });
}

function createAnimeCard(anime) {
    const card = document.createElement('div');
    card.className = 'anime-card';
    
    const isFavorited = favorites.some(fav => fav.id === anime.id);
    
    card.innerHTML = `
        <div class="anime-card-image">
            <img src="${anime.image}" alt="${anime.title}" loading="lazy">
            <div class="anime-card-overlay">
                <button class="anime-card-overlay-btn" onclick="openModal(${anime.id})">
                    <i class="fas fa-play"></i> Assistir
                </button>
            </div>
            <div class="anime-card-badge">${anime.status}</div>
        </div>
        <div class="anime-info">
            <h3>${anime.title}</h3>
            <p class="genre">${anime.genre.join(', ')}</p>
            <div class="anime-rating">
                <span class="stars">${renderStars(anime.rating)}</span>
                <button class="favorite-btn ${isFavorited ? 'liked' : ''}" onclick="toggleFavoriteCard(event, ${anime.id})" title="Adicionar aos favoritos">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '½';
    return stars + ` ${rating}`;
}

// ==================== FUNÇÕES DE MODAL ====================

function openModal(animeId) {
    const anime = animeDatabase.find(a => a.id === animeId);
    if (!anime) return;
    
    currentAnimeId = anime.id;
    
    document.getElementById('modalImage').src = anime.image;
    document.getElementById('modalTitle').textContent = anime.title;
    document.getElementById('modalYear').textContent = anime.year;
    document.getElementById('modalEpisodes').textContent = anime.episodes;
    document.getElementById('modalStatus').textContent = anime.status;
    document.getElementById('modalDescription').textContent = anime.description;
    document.getElementById('modalBadge').textContent = anime.status;
    document.getElementById('modalStars').textContent = renderStars(anime.rating);
    document.getElementById('modalRating').textContent = `${anime.rating}/5.0`;
    document.getElementById('modalPopularity').style.width = `${anime.popularity}%`;
    
    const genresContainer = document.getElementById('modalGenres');
    genresContainer.innerHTML = anime.genre.map(g => `<span class="genre-tag">${g}</span>`).join('');
    
    const isFavorited = favorites.some(fav => fav.id === anime.id);
    const favBtn = document.getElementById('favoriteBtn');
    favBtn.classList.toggle('active', isFavorited);
    document.getElementById('favoriteBtnText').textContent = isFavorited ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos';
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentAnimeId = null;
}

// ==================== FUNÇÕES DE FAVORITOS ====================

function toggleFavoriteCard(event, animeId) {
    event.stopPropagation();
    const anime = animeDatabase.find(a => a.id === animeId);
    
    const isFavorited = favorites.some(fav => fav.id === animeId);
    
    if (isFavorited) {
        favorites = favorites.filter(fav => fav.id !== animeId);
    } else {
        favorites.push(anime);
    }
    
    saveFavorites();
    updateAllGrids();
}

function toggleFavorite() {
    if (currentAnimeId === null) return;
    toggleFavoriteCard({ stopPropagation: () => {} }, currentAnimeId);
    openModal(currentAnimeId);
}

function updateFavorites() {
    if (favorites.length === 0) {
        favoritesGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-bookmark"></i>
                <p>Nenhum anime adicionado à biblioteca</p>
                <small>Clique no coração para adicionar animes favoritos</small>
            </div>
        `;
    } else {
        renderAnimeCards(favorites, favoritesGrid);
    }
}

function saveFavorites() {
    localStorage.setItem('animeFavorites', JSON.stringify(favorites));
}

// ==================== FUNÇÕES DE FILTRO ====================

function filterByCategory(category) {
    return animeDatabase.filter(anime => anime.genre.includes(category));
}

function searchAnimes(query) {
    const lowerQuery = query.toLowerCase();
    return animeDatabase.filter(anime =>
        anime.title.toLowerCase().includes(lowerQuery) ||
        anime.genre.some(g => g.toLowerCase().includes(lowerQuery)) ||
        anime.description.toLowerCase().includes(lowerQuery)
    );
}

function getBestRated() {
    return [...animeDatabase].sort((a, b) => b.rating - a.rating).slice(0, 6);
}

// ==================== FUNÇÕES AUXILIARES ====================

function updateAllGrids() {
    renderAnimeCards(animeDatabase.sort((a, b) => b.popularity - a.popularity), trendingGrid);
    renderAnimeCards(getBestRated(), bestRatedGrid);
    updateFavorites();
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Obrigado por se inscrever com ${email}! Você receberá notificações sobre novos lançamentos.`);
    e.target.reset();
}

// ==================== EVENT LISTENERS ====================

// Busca
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    const results = query ? searchAnimes(query) : animeDatabase;
    renderAnimeCards(results, trendingGrid);
    currentCategory = null;
    scrollToSection('trending');
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Categorias
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        currentCategory = category;
        const filtered = filterByCategory(category);
        renderAnimeCards(filtered, trendingGrid);
        scrollToSection('trending');
    });
});

// Modal
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Menu Hamburger
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navLinkItems.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Scroll to Top
window.addEventListener('scroll', () => {
    scrollToTopBtn.classList.toggle('show', window.scrollY > 300);
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Atualizar links de navegação ao fazer scroll
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== INICIALIZAÇÃO ====================

document.addEventListener('DOMContentLoaded', () => {
    // Calcular estatísticas
    const totalEpisodes = animeDatabase.reduce((sum, anime) => sum + anime.episodes, 0);
    const totalHours = Math.round(totalEpisodes * 0.42);
    
    document.getElementById('totalAnimes').textContent = animeDatabase.length;
    document.getElementById('totalEpisodes').textContent = totalEpisodes;
    document.getElementById('totalHours').textContent = totalHours;
    
    // Renderizar todos os grids
    updateAllGrids();
    
    // Animar hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'slideUp 0.8s ease-out';
    }
});
