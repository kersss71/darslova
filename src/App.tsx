import { Phone, MessageCircle } from "lucide-react";
import logo from "./accets/logo.png";
import lamp from "./accets/lamp.png";
import Header from "./components/Header/Header";
import Text from "./components/Text/Text";
import Logo from "./components/Logo/Logo";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="min-h-screen bg-[#FFF3DD] flex flex-col items-center justify-center p-4 md:p-8">
      <Header>
        <Text
          tag="p"
          className="text-sm md:text-base uppercase tracking-wide mb-2"
        >
          СОЗДАНО
        </Text>
        <Text
          tag="p"
          className="text-sm md:text-base uppercase tracking-wide mb-2"
        >
          АГЕНТСТВОМ КУЛЬТУРНЫХ СОБЫТИЙ
        </Text>
        <Logo logo={logo} />
      </Header>

      {/* Main Title */}
      <Text tag="h1" className="text-4xl mb-4 font-light tracking-wider dar">
        ДАР СЛОВА
      </Text>

      {/* Decorative String */}
      <div className="flex justify-center mb-12">
        <img src={lamp} alt="гирлянда" width={280} />
      </div>

      {/* Main Text */}
      <div className="text-center max-w-2xl mb-12">
        <Text tag="p" className="text-lg p">
          Сайт проекта «Дар слова» находится в разработке.
        </Text>
        <Text tag="p" className="text-lg p">
          Немного терпения и здесь будет тепло и светло, как везде,
        </Text>
        <Text tag="p" className="text-lg p">
          где мы беремся создать атмосферу. Мы - Агенство культурных событий «5
          УТРА».
        </Text>
      </div>

      {/* Contact Information */}
      <div className="text-center p">
        <Text tag="p" className="font-medium mb-4 ">
          Контакты для связи с нами:
        </Text>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Phone size={16} />
          <a
            href="tel:+79267888962"
            className="text-black-500  hover:underline"
          >
            Тел: +7 926 788-89-62
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 mb-8 p">
          <MessageCircle size={16} />
          <a
            href="https://t.me/pyat_utra_agency"
            className="text-black-500 hover:underline"
          >
            TГ: @pyat_utra_agency
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer>
        <Text tag="p" className="uppercase text-sm tracking-wide">
          DARSLOVA.COM
        </Text>
      </Footer>
    </div>
  );
}

export default App;
