import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = 0; // Пока статичное значение

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="text-2xl font-bold text-gray-900">
            MERCH
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              О блогере
            </Link>
            <Link
              to="/contacts"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Контакты
            </Link>
          </nav>

          {/* Корзина и мобильное меню */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Мобильное меню */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                to="/catalog"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Каталог
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О блогере
              </Link>
              <Link
                to="/contacts"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
