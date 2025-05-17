import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { COLORS, SPACING } from '../utils/theme';
import Header from '../components/Header/Header';
import SearchBar, { Filters } from '../components/SearchBar/SearchBar';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import ProductCard from '../components/ProductCard/ProductCard';
import NewProductCard from '../components/NewProductCard/NewProductCard';
import BestSellerBanner from '../components/BestSellerBanner/BestSellerBanner';
import { modernProducts, newProducts, bestSellers } from '../mocks/products';
import { Product } from '../types';

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({
    searchText: '',
    priceRange: { min: 0, max: null },
    categories: []
  });
  
  // Filtrar produtos com base nos filtros ativos
  const filterProducts = (products: Product[]): Product[] => {
    return products.filter(product => {
      // Filtro de texto de pesquisa
      const matchesSearchText = filters.searchText === '' || 
        product.title.toLowerCase().includes(filters.searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.searchText.toLowerCase());
      
      // Filtro de preço
      const matchesPrice = filters.priceRange.max === null || 
        (product.price >= filters.priceRange.min && product.price <= filters.priceRange.max);
      
      // Se não há categorias selecionadas, não filtramos por categoria
      const matchesCategory = filters.categories.length === 0 ||
        // Aqui estamos simulando - em um app real, o produto teria uma propriedade 'category'
        (filters.categories.some(category => {
          // Simulamos a categoria com base no título ou descrição (apenas para demonstração)
          const productText = (product.title + ' ' + product.description).toLowerCase();
          return productText.includes(category.toLowerCase());
        }));
      
      return matchesSearchText && matchesPrice && matchesCategory;
    });
  };

  // Aplicar filtros aos produtos
  const filteredModernProducts = filterProducts(modernProducts);
  const filteredNewProducts = filterProducts(newProducts);
  
  // Atualizar filtros quando o SearchBar envia alterações
  const handleFilterChange = (newFilters: Filters) => {
    console.log('Novos filtros aplicados:', newFilters);
    setFilters(newFilters);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    Alert.alert('Adicionado ao carrinho', `${product.title} foi adicionado ao carrinho.`);
  };

  const handleCartPress = () => {
    if (cartItems.length === 0) {
      Alert.alert('Carrinho vazio', 'Seu carrinho está vazio.');
    } else {
      Alert.alert('Carrinho', `Você tem ${cartItems.length} itens no carrinho.`);
    }
  };

  // Verificar se algum filtro está ativo
  const hasActiveFilters = filters.searchText !== '' || 
    filters.categories.length > 0 || 
    filters.priceRange.max !== null;

  return (
    <View style={styles.container}>
      <Header onCartPress={handleCartPress} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar onFilterChange={handleFilterChange} />
        
        {/* Mostrar mensagem quando não há resultados */}
        {hasActiveFilters && 
         filteredModernProducts.length === 0 && 
         filteredNewProducts.length === 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>
              Nenhum produto encontrado com os filtros selecionados.
            </Text>
            <Text style={styles.noResultsSubtext}>
              Tente mudar ou limpar os filtros para ver mais produtos.
            </Text>
          </View>
        )}
        
        {filteredModernProducts.length > 0 && (
          <>
            <SectionHeader title="Moderno • Itens de boa qualidade" />
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              contentContainerStyle={styles.horizontalList}
            >
              {filteredModernProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart} 
                />
              ))}
            </ScrollView>
          </>
        )}
        
        {filteredNewProducts.length > 0 && (
          <>
            <SectionHeader title="Novidades • Itens de boa qualidade" />
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              contentContainerStyle={styles.horizontalList}
            >
              {filteredNewProducts.map((product) => (
                <NewProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart} 
                />
              ))}
            </ScrollView>
          </>
        )}
        
        <SectionHeader title="Mais Vendidos" />
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.horizontalList}
        >
          {bestSellers.map((bestSeller) => (
            <BestSellerBanner key={bestSeller.id} bestSeller={bestSeller} />
          ))}
        </ScrollView>
        
        <View style={styles.footer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  horizontalList: {
    paddingHorizontal: SPACING.medium,
    paddingBottom: SPACING.medium,
  },
  footer: {
    height: SPACING.large,
  },
  noResultsContainer: {
    margin: SPACING.medium,
    padding: SPACING.large,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  noResultsSubtext: {
    fontSize: 14,
    color: COLORS.darkGray,
    textAlign: 'center',
  }
});

export default Home;