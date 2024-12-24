import { Phone, MessageCircle } from "lucide-react";
import logo from "./accets/logo.png";
import lamp from "./accets/lamp.png";
function App() {
  return (
    <div className="min-h-screen bg-[#FFF3DD] flex flex-col items-center justify-center p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-sm md:text-base uppercase tracking-wide mb-2">
          СОЗДАНО
        </p>
        <p className="text-sm md:text-base uppercase tracking-wide mb-2">
          АГЕНТСТВОМ КУЛЬТУРНЫХ СОБЫТИЙ
        </p>

        {/* Logo */}
        <div className="flex justify-center items-center mb-16">
          <img src={logo} alt="logo" width={100} />
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl mb-4 font-light tracking-wider dar">ДАР СЛОВА</h1>

      {/* Decorative String */}
      <div className="flex justify-center mb-12">
        <img src={lamp} alt="гирлянда" width={280} />
      </div>

      {/* Main Text */}
      <div className="text-center max-w-2xl mb-12">
        <p className="text-lg p">
          Сайт проекта «Дар слова» находится в разработке.
        </p>
        <p className=" text-lg  p">
          Немного терпения и здесь будет тепло и светло, как везде,
        </p>
        <p className=" text-lg  p">
          где мы беремся создать атмосферу. Мы - Агенство культурных событий «5
          УТРА».
        </p>
      </div>

      {/* Contact Information */}
      <div className="text-center p">
        <p className="font-medium mb-4 ">Контакты для связи с нами:</p>
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
      <footer className="mt-auto">
        <p className="uppercase text-sm tracking-wide">DARSLOVA.COM</p>
      </footer>
    </div>
  );
}

export default App;
