import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, SPACING, SHADOWS } from '../../utils/theme';
import { MaterialIcons } from '@expo/vector-icons';

// Tipos de filtro
export interface Filters {
  priceRange: { min: number; max: number | null };
  categories: string[];
  searchText: string;
}

interface SearchBarProps {
  onFilterChange: (filters: Filters) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onFilterChange }) => {
  // Estado dos filtros
  const [searchText, setSearchText] = useState('');
  const [priceRange, setPriceRange] = useState<{ min: number; max: number | null }>({ min: 0, max: null });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Quando qualquer filtro muda, notifica o componente pai
  const updateFilters = (
    newSearchText = searchText, 
    newPriceRange = priceRange, 
    newCategories = selectedCategories
  ) => {
    const filters: Filters = {
      searchText: newSearchText,
      priceRange: newPriceRange,
      categories: newCategories
    };
    
    onFilterChange(filters);
  };
  
  // Handlers para atualizações de filtro
  const handleSearchChange = (text: string) => {
    setSearchText(text);
    updateFilters(text, priceRange, selectedCategories);
  };
  
  const handlePriceFilter = (min: number, max: number | null) => {
    const newPriceRange = { min, max };
    setPriceRange(newPriceRange);
    updateFilters(searchText, newPriceRange, selectedCategories);
  };
  
  const handleCategoryToggle = (category: string) => {
    let newCategories: string[];
    
    if (selectedCategories.includes(category)) {
      // Remove a categoria se já estiver selecionada
      newCategories = selectedCategories.filter(cat => cat !== category);
    } else {
      // Adiciona a categoria se não estiver selecionada
      newCategories = [...selectedCategories, category];
    }
    
    setSelectedCategories(newCategories);
    updateFilters(searchText, priceRange, newCategories);
  };
  
  const clearFilters = () => {
    setSearchText('');
    setPriceRange({ min: 0, max: null });
    setSelectedCategories([]);
    updateFilters('', { min: 0, max: null }, []);
  };
  
  // Lista de categorias disponíveis
  const categories = ['Sala', 'Quarto', 'Cozinha', 'Escritório', 'Jardim'];
  
  // Renderiza um botão de categoria
  const renderCategoryButton = (category: string) => {
    const isActive = selectedCategories.includes(category);
    
    return (
      <TouchableOpacity
        key={category}
        style={[
          styles.categoryButton,
          isActive ? styles.categoryButtonActive : {}
        ]}
        onPress={() => handleCategoryToggle(category)}
      >
        <Text style={[
          styles.categoryButtonText,
          isActive ? styles.categoryButtonTextActive : {}
        ]}>
          {category}
        </Text>
      </TouchableOpacity>
    );
  };
  
  // Renderiza um botão de preço
  const renderPriceButton = (title: string, min: number, max: number | null) => {
    const isActive = priceRange.min === min && priceRange.max === max;
    
    return (
      <TouchableOpacity
        style={[
          styles.priceButton,
          isActive ? styles.priceButtonActive : {}
        ]}
        onPress={() => handlePriceFilter(min, max)}
      >
        <Text style={[
          styles.priceButtonText,
          isActive ? styles.priceButtonTextActive : {}
        ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MÓVEIS</Text>
      
      {/* Campo de pesquisa */}
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="search" size={20} color={COLORS.gray} style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Pesquisar móveis exclusivos..."
            placeholderTextColor={COLORS.gray}
            value={searchText}
            onChangeText={handleSearchChange}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => handleSearchChange('')}>
              <MaterialIcons name="close" size={20} color={COLORS.gray} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      
      {/* Filtros */}
      <View style={styles.filtersSection}>
        {/* Filtros de preço */}
        <Text style={styles.filterTitle}>Preço:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterButtonRow}>
            {renderPriceButton('Qualquer preço', 0, null)}
            {renderPriceButton('Até R$500', 0, 500)}
            {renderPriceButton('R$500-R$1000', 500, 1000)}
            {renderPriceButton('Acima de R$1000', 1000, null)}
          </View>
        </ScrollView>
        
        {/* Filtros de categoria */}
        <Text style={styles.filterTitle}>Categoria:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterButtonRow}>
            {categories.map(category => renderCategoryButton(category))}
          </View>
        </ScrollView>
        
        {/* Limpar filtros */}
        {(searchText.length > 0 || selectedCategories.length > 0 || priceRange.max !== null) && (
          <TouchableOpacity 
            style={styles.clearButton}
            onPress={clearFilters}
          >
            <Text style={styles.clearButtonText}>Limpar todos os filtros</Text>
          </TouchableOpacity>
        )}
        
        {/* Mostrar filtros ativos */}
        {(searchText.length > 0 || selectedCategories.length > 0 || priceRange.max !== null) && (
          <View style={styles.activeFiltersContainer}>
            <Text style={styles.activeFiltersTitle}>Filtros ativos:</Text>
            {searchText.length > 0 && (
              <Text style={styles.activeFilter}>• Pesquisa: "{searchText}"</Text>
            )}
            {priceRange.max !== null && (
              <Text style={styles.activeFilter}>
                • Preço: {priceRange.min === 0 ? 'Até' : 'De'} R${priceRange.min}
                {priceRange.max !== null ? ` até R$${priceRange.max}` : '+'}
              </Text>
            )}
            {selectedCategories.length > 0 && (
              <Text style={styles.activeFilter}>
                • Categorias: {selectedCategories.join(', ')}
              </Text>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.medium,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 12,
    margin: SPACING.small,
    ...SHADOWS.small,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.small,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: SPACING.medium,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    paddingHorizontal: SPACING.small,
  },
  searchIcon: {
    marginRight: SPACING.small,
  },
  input: {
    flex: 1,
    height: 40,
    color: COLORS.black,
  },
  filtersSection: {
    marginBottom: SPACING.small,
  },
  filterTitle: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
    marginTop: SPACING.small,
    color: COLORS.darkGray,
  },
  filterButtonRow: {
    flexDirection: 'row',
    marginBottom: SPACING.medium,
    paddingRight: SPACING.medium,
  },
  priceButton: {
    backgroundColor: COLORS.lightGray,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  priceButtonActive: {
    backgroundColor: COLORS.primary,
  },
  priceButtonText: {
    color: COLORS.darkGray,
    fontWeight: '500',
  },
  priceButtonTextActive: {
    color: COLORS.white,
  },
  categoryButton: {
    backgroundColor: COLORS.lightGray,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryButtonActive: {
    backgroundColor: COLORS.secondary,
  },
  categoryButtonText: {
    color: COLORS.darkGray,
    fontWeight: '500',
  },
  categoryButtonTextActive: {
    color: COLORS.white,
  },
  activeFiltersContainer: {
    marginTop: SPACING.medium,
    backgroundColor: COLORS.background,
    padding: SPACING.medium,
    borderRadius: SIZES.base,
  },
  activeFiltersTitle: {
    fontSize: SIZES.small,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
    color: COLORS.primary,
  },
  activeFilter: {
    fontSize: SIZES.small,
    color: COLORS.darkGray,
    marginBottom: 4,
  },
  clearButton: {
    backgroundColor: COLORS.accent2,
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: SPACING.small,
  },
  clearButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  }
});

export default SearchBar;