import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero секция */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Блогер"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Александр Петров
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Блогер, предприниматель и создатель контента с аудиторией более 500K
            подписчиков
          </p>
        </div>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Левая колонка - Биография */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Моя история
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 mb-4">
                    Привет! Меня зовут Александр, и я создаю контент уже более 5
                    лет. Начал свой путь как обычный блогер, делясь опытом и
                    знаниями в сфере технологий и предпринимательства.
                  </p>
                  <p className="text-gray-700 mb-4">
                    За эти годы я помог тысячам людей развить свои навыки, найти
                    новые возможности и построить успешные проекты. Моя миссия —
                    делиться знаниями и вдохновлять других на достижение своих
                    целей.
                  </p>
                  <p className="text-gray-700">
                    Сейчас я не только создаю контент, но и развиваю собственный
                    бренд мерча, который отражает мои ценности и помогает
                    сообществу выражать свою принадлежность к нашему движению.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Достижения */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Достижения
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      500K+
                    </div>
                    <div className="text-gray-600">Подписчиков</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      50M+
                    </div>
                    <div className="text-gray-600">Просмотров</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      100+
                    </div>
                    <div className="text-gray-600">Проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      5
                    </div>
                    <div className="text-gray-600">Лет опыта</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Правая колонка - Социальные сети и контакты */}
          <div>
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900">
                  Социальные сети
                </h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <Icon name="Youtube" size={20} />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <Icon name="Instagram" size={20} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <Icon name="Send" size={20} />
                    <span>Telegram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <Icon name="Twitter" size={20} />
                    <span>Twitter</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900">
                  Сотрудничество
                </h3>
                <p className="text-gray-600 mb-6">
                  Открыт для интересных проектов и партнерств
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Написать мне
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
