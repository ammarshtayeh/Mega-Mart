export interface NavigationMenuProps {
  categories: string[];
  categoriesLoading: boolean;
  activeCategory: string | null;
  showCategories: boolean;
  setShowCategories: (show: boolean) => void;
  handleCategoryClick: (slug: string) => void;
}
