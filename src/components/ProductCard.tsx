import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">
            {product.name}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-purple-600">
              {product.price} ₽
            </span>

            <Button
              onClick={handleAddToCart}
              size="sm"
              className="bg-purple-600 hover:bg-purple-700"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />В корзину
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
