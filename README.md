# 📱 Marketplace de Móveis - App React Native

Um aplicativo de e-commerce para móveis desenvolvido em React Native com TypeScript. Esta aplicação apresenta uma interface moderna e vibrante para navegação e compra de móveis.

## 🚀 Características

- **Design Moderno e Vibrante**: Interface colorida e atraente que destaca os produtos  
- **Carrosséis Horizontais**: Navegação fluida e intuitiva entre produtos  
- **Sistema de Filtros**: Filtragem por texto, preço e categorias  
- **Visualização de Produtos**: Cards detalhados com imagem, descrição e preço  
- **Seção de Destaques**: Banner de produtos mais vendidos  
- **Sistema de Carrinho**: Adição de produtos ao carrinho com feedback visual  

---

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework principal para desenvolvimento mobile  
- **TypeScript**: Adição de tipagem estática para melhor desenvolvimento  
- **Expo**: Facilitando o desenvolvimento e teste em diferentes plataformas  
- **React Native Vector Icons**: Ícones para aprimorar a interface  

---

## 🎨 Paleta de Cores

O aplicativo utiliza uma paleta vibrante e harmônica:

- **Roxo Principal** `#7E57C2`: Utilizado em elementos principais e de destaque  
- **Laranja Vibrante** `#FF6D00`: Para botões e elementos secundários  
- **Turquesa** `#00C2A8`: Para ações e botões alternativos  
- **Rosa** `#FF4F9A`: Para badges e elementos de destaque  
- **Azul Claro** `#F5F8FF`: Fundo da aplicação  
- **Branco** `#FFFFFF`: Cards e elementos de conteúdo

- ### Sistema de Filtros

- **Pesquisa por Texto**: Filtra produtos por nome ou descrição  
- **Filtro por Preço**: Opções predefinidas (até R$500, R$500-R$1000, acima de R$1000)  
- **Filtro por Categoria**: Seleção de múltiplas categorias (Sala, Quarto, Cozinha, etc.)  
- **Indicadores Visuais**: Mostra filtros ativos e permite limpá-los facilmente  

### Carrosséis de Produtos

- **Seção "Moderno"**: Produtos com design moderno  
- **Seção "Novidades"**: Últimos lançamentos  
- **Seção "Mais Vendidos"**: Produtos populares com promoções  

### Carrinho de Compras

- **Adição ao Carrinho**: Botões intuitivos em cada card de produto  
- **Feedback Visual**: Confirmação ao adicionar item  
- **Contador de Itens**: Visualização da quantidade de itens no carrinho  

---

## ⚙️ Instalação e Execução

### Pré-requisitos

- Node.js (v14 ou superior)  
- npm ou yarn  
- Expo CLI  

### Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/marketplace-moveis.git
cd marketplace-moveis

## 📁 Estrutura do Projeto

```text
src
├── assets            # Recursos estáticos (imagens, fontes)
├── components        # Componentes reutilizáveis
│   ├── BestSellerBanner  # Banner para produtos mais vendidos
│   ├── Header           # Cabeçalho do aplicativo
│   ├── NewProductCard   # Card para produtos da seção "Novidades"
│   ├── ProductCard      # Card para produtos da seção "Moderno"
│   ├── SearchBar        # Barra de pesquisa com sistema de filtros
│   └── SectionHeader    # Cabeçalho para seções de produtos
├── mocks             # Dados mockados para desenvolvimento
├── screens           # Telas do aplicativo
│   └── Home          # Tela principal
├── types             # Definições de tipos TypeScript
└── utils             # Utilitários, incluindo tema e funções auxiliares
