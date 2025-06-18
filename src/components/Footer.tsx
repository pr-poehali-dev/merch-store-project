import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div>
            <h3 className="text-xl font-bold mb-4">MERCH</h3>
            <p className="text-gray-400 text-sm">
              Официальный мерч блогера. Качественные товары с уникальным
              дизайном.
            </p>
          </div>

          {/* Информация */}
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/delivery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Доставка
                </Link>
              </li>
              <li>
                <Link
                  to="/payment"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Оплата
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Возврат
                </Link>
              </li>
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/support"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Помощь
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: support@merch.com</p>
              <p>Телефон: +7 (999) 123-45-67</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white transition-colors">
                  Telegram
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  YouTube
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 MERCH. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
