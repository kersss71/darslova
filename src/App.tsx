import { Phone, MessageCircle } from "lucide-react";
import logo from "./accets/logo.png";
import lamp from "./accets/lamp.png";
import Header from "./components/Header/Header";
import Text from "./components/Text/Text";
import Logo from "./components/Logo/Logo";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import Image from "./components/Image/Image";
function App() {
  return (
    <div className="min-h-screen bg-[#FFF3DD] flex flex-col items-center justify-center p-4 md:p-8">
      <Header>
        <Text
          tag="p"
          className="text-sm md:text-base uppercase tracking-wide mb-2"
          text="СОЗДАНО"
        />
        <Text
          tag="p"
          className="text-sm md:text-base uppercase tracking-wide mb-2"
          text="АГЕНТСТВОМ КУЛЬТУРНЫХ СОБЫТИЙ"
        />
        <Logo logo={logo} />
      </Header>
      <Text
        tag="h1"
        className="text-4xl mb-4 font-light tracking-wider dar"
        text="ДАР СЛОВА"
      />
      <Image src={lamp} alt="гирлянда" width={280} />
      <div className="text-center max-w-2xl mb-12">
        <Text
          tag="p"
          className="text-lg p"
          text="Сайт проекта «Дар слова» находится в разработке."
        />
        <Text
          tag="p"
          className="text-lg p"
          text="Немного терпения и здесь будет тепло и светло, как везде,"
        />
        <Text
          tag="p"
          className="text-lg p"
          text="где мы беремся создать атмосферу. Мы - Агенство культурных событий «5
          УТРА»."
        />
      </div>
      <div className="text-center p">
        <Text
          tag="p"
          className="font-medium mb-4 "
          text="Контакты для связи с нами:"
        />
        <Contacts
          icon={<Phone size={16} />}
          href="tel:+79267888962"
          text="Тел: +7 926 788-89-62"
        />
        <Contacts
          icon={<MessageCircle size={16} />}
          href="https://t.me/pyat_utra_agency"
          text="TГ: @pyat_utra_agency"
        />
      </div>
      <Footer>
        <Text
          tag="p"
          className="uppercase text-sm tracking-wide"
          text="DARSLOVA.COM"
        />
      </Footer>
    </div>
  );
}

export default App;
