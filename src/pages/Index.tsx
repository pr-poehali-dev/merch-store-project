import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  // Показываем первые 6 популярных товаров
  const popularProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero секция */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Официальный мерч
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Качественные товары с уникальным дизайном. Поддержи любимого
              блогера!
            </p>
            <Link to="/catalog">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Перейти в каталог
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-gray-600">
                Только проверенные материалы и надежные поставщики
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставляем по всей России от 2-3 дней
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Поддержка</h3>
              <p className="text-gray-600">
                Готовы помочь с любыми вопросами 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные товары */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Популярные товары
            </h2>
            <p className="text-gray-600 text-lg">
              Самые любимые товары нашего сообщества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {popularProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(product) => {
                  console.log("Добавлен в корзину:", product.name);
                  // Здесь будет логика добавления в корзину
                }}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/catalog">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                Посмотреть все товары
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
