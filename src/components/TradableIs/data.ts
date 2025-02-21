import imageOne from "@assets/services/picOne.png";
import imageTwo from "@assets/services/picTwo.png";
import imageThree from "@assets/services/picThree.png";
import imageFour from "@assets/services/picFour.png";
import imageFive from "@assets/services/picFive.png";

export interface TradebladeItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const tradebladeItems: TradebladeItem[] = [
  {
    id: 1,
    image: imageOne,
    title: "Копи–трейдинг 24/7",
    description:
      "Copy–Trading позволяет следить за сделками команды и получать прибыль 24/7 без каких–либо усилий или проблем для вас..",
  },
  {
    id: 2,
    image: imageTwo,
    title: "Высокая прибыль каждий день",
    description:
      "Каждая сделка показывает хорошие результаты на рынках за счет хорошего денежного и риск менеджмента..",
  },
  {
    id: 3,
    image: imageThree,
    title: "Сильное окружение",
    description:
      "Ты попадаешь в сильное крипто окружение, ведь развиваться легче когда нас много. В чате присутствуют люди из нашей команды, которые общаются со всеми, помогают и подсказывают..",
  },
  {
    id: 4,
    image: imageFour,
    title: "Торговля спотовыми и фьючерсными сделками",
    description:
      "Платформа для копи–трейдинга поддерживает торговлю как спотовыми, так и фьючерсными сделками на Binance..",
  },
  {
    id: 5,
    image: imageFive,
    title: "Собственный курс по трейдингу",
    description:
      "Мы хотим менять комьюнити, улучшать его. В личном кабинете на сайте вы найдете наш собственный курс по криптовалютам, который поможет увереннее понимать наши сигналы и разрабатывать свои..",
  },
];

export default tradebladeItems;
