const quizQuestions  = () => {
  return ([
  {
    question: "Z czego chciałbyś/chciałabyś słynąć",
      answers: [
        {
          type: "Gryffindor",
          points: 40,
          content: "Odwaga"
        },
        {
          type: "Slytherin",
          points: 10,
          content: "Spryt"
        },
        {
          type: "Ravenclaw",
          points: 20,
          content: "Mądrość"
        },
        {
          type: "Hufflepuff",
          points: 30,
          content: "Dobroć"
        },
      ]
  },
  {
    question: "Co jest dla Ciebie najważniejsze?",
    answers: [
      {
        type: "Slytherin",
        content: "Władza"
      },
      {
        type: "Hufflepuff",
        content: "Pracowitość"
      },
      {
        type: "Gryffindor",
        content: "Rodzina i przyjaciele"
      },
      {
        type: "Ravenclaw",
        content: "Wiedza"
      },
    ]
  },
  {
    question: "Jaki jest Twój ulubiony przedmiot?",
    answers: [
      {
        type: "Hufflepuff",
        content: "Zielarstwo"
      },
      {
        type: "Ravenclaw",
        content: "Historia magii"
      },
      {
        type: "Gryffindor",
        content: "Obrona przed czarną magią"
      },
      {
        type: "Slytherin",
        content: "Eliksiry"
      },
    ]
  },
  {
    question: "Kim chciałbyś zostać w przyszłości?",
    answers: [
      {
        type: "Gryffindor",
        content: "Aurorem"
      },
      {
        type: "Slytherin",
        content: "Pracownikiem Ministerstwa Magii"
      },
      {
        type: "Hufflepuff",
        content: "Uzdrowicielem"
      },
      {
        type: "Ravenclaw",
        content: "Profesorem w Hogwarcie"
      },
    ]
  },
  {
    question: "Wszedłeś/aś do zaczarowanego ogrodu. Co byłoby najbardziej zachęcające do zbadania jako pierwsze?",
    answers: [
      {
        type: "Gryffindor",
        content: "Drzewo o srebrnych liściach obsypane złotymi jabłkami"
      },
      {
        type: "Hufflepuff",
        content: "Grube czerwone muchomory, które jak się wydaje rozmawiają między sobą"
      },
      {
        type: "Slytherin",
        content: "Bulgocąca sadzawka, w głębinach której coś błyszczy i wiruje"
      },
      {
        type: "Ravenclaw",
        content: "Posąg starego czarodzieja z dziwnie mrugającym okiem."
      },
    ]
  },
  {
    question: "Raz na sto lat, bez rozwija kwiaty, które dostosowują swój zapach, do przyciągnięcia nieostrożnych osób. Jeśli zwabiłyby Ciebie, jaki miałyby zapach?",
    answers: [
      {
        type: "Gryffindor",
        content: "Domu"
      },
      {
        type: "Slytherin",
        content: "Trzaskającego ognia w kominku"
      },
      {
        type: "Ravenclaw",
        content: "Pergaminu"
      },
      {
        type: "Hufflepuff",
        content: "Morza"
      },
    ]
  },
  {
    question: "Jakie zwierzę wybierasz?",
    answers: [
      {
        type: "Ravenclaw",
        content: "Ropucha"
      },
      {
        type: "Gryffindor",
        content: "Sowa"
      },
      {
        type: "Slytherin",
        content: "Kot"
      },
      {
        type: "Hufflepuff",
        content: "Szczur"
      },
    ]
  },
  {
    question: "Twój przyjaciel wpadł w tarapaty, ściągając na egzaminie z Historii Magii. Właśnie oczekuje w gabinecie opiekuna domu na reprymendę. Co robisz?",
    answers: [
      {
        type: "Slytherin",
        content: "Wyrzucasz mu, że został nakryty, przez co dom stracił punkty."
      },
      {
        type: "Hufflepuff",
        content: "Czekasz pod gabinetem, by podnieść go na duchu, lecz zwracasz uwagę na to, że źle postąpił."
      },
      {
        type: "Ravenclaw",
        content: "Postanawiasz pomóc przyjacielowi zakuwać do poprawki."
      },
      {
        type: "Gryffindor",
        content: "Rozrzucasz pod gabinetem detonatory pozorujące, które zakupiłeś w Magicznych Dowcipach Weasleyów – dywersja pozwala mu wymknąć się z gabinetu."
      },
    ]
  },
  {
    question: "W Hogsmeade organizowany jest koncert Fatalnych Jędz, ale masz do napisania esej na Transmutację",
    answers: [
      {
        type: "Slytherin",
        content: "Grozisz kujonowi na roku, że jeśli nie napisze pracy za Ciebie, rzucisz na niego zaklęcie galaretowatych nóg."
      },
      {
        type: "Ravenclaw",
        content: "Nie ma problemu – napisałeś esej już dawno temu."
      },
      {
        type: "Hufflepuff",
        content: "Organizujesz grupę samopomocy ze znajomymi – razem dacie radę skończyć na czas."
      },
      {
        type: "Gryffindor",
        content: "Piszesz coraz większe litery i robisz coraz większe odstępy – braki w wypracowaniu nadrobisz urokiem osobistym i tupetem."
      },
    ]
  },
  {
    question: "Zbliża się mecz Quidditcha. Aby wygrać:",
    answers: [
      {
        type: "Gryffindor",
        content: "Ćwiczysz w dzień i w nocy, słońce czy deszcz"
      },
      {
        type: "Ravenclaw",
        content: "Analizujesz słynne mecze i na ich podstawie opracowujesz nową taktykę"
      },
      {
        type: "Hufflepuff",
        content: "Przede wszystkim dbasz o dobrą atmosferę w drużynie – gra zespołowa jest najważniejsza"
      },
      {
        type: "Slytherin",
        content: "Kupujesz najlepszą miotłę na rynku – Kometa nie ma szans z Nimbusem"
      },
    ]
  },
  {
    question: "Z czego zrobiłbyś swoją różdżkę?",
    answers: [
      {
        type: "Ravenclaw",
        content: "Smocze serce"
      },
      {
        type: "Slytherin",
        content: "Włosy jednorożca"
      },
      {
        type: "Gryffindor",
        content: "Pióro feniksa"
      },
      {
        type: "Hufflepuff",
        content: "Włosy Wila"
      },
    ]
  },
  {
    question: " Zbliża się spotkanie Klubu Pojedynków. Czego oczekujesz?",
    answers: [
      {
        type: "Hufflepuff",
        content: "Uważasz to za stratę czasu – konflikty powinno się rozwiązywać poprzez dyskusję."
      },
      {
        type: "Gryffindor",
        content: "Chcesz się dowiedzieć, jak obronić siebie i bliskich przed czarną magią."
      },
      {
        type: "Ravenclaw",
        content: "Boisz się, że nie będziesz tak dobry jak inni, ale dasz z siebie wszystko."
      },
      {
        type: "Slytherin",
        content: "Cieszysz się na myśl, że poznasz zaklęcia, które będziesz mógł rzucać między zajęciami na uczniów, którzy Cię irytują."
      },
    ]
  },
  {
    question: "W którym wydziale ministerstwa mógłbyś pracować?",
    answers: [
      {
        type: "Slytherin",
        content: "Magiczne wypadki i katastrofy"
      },
      {
        type: "Hufflepuff",
        content: "Magiczne egzekwowanie prawa"
      },
      {
        type: "Ravenclaw",
        content: "Regulacja i kontrola magicznych stworzeń"
      },
      {
        type: "Gryffindor",
        content: "Międzynarodowa współpraca magiczna"
      },
    ]
  },
  {
    question: "Dochodzi do tajemniczych napaści, mówi się, że Komnata Tajemnic została otwarta.",
    answers: [
      {
        type: "Ravenclaw",
        content: "Wierzysz, że kadra nauczycielska ma wszystko pod kontrolą, pozwalasz działać mądrzejszym od siebie."
      },
      {
        type: "Hufflepuff",
        content: "Wszędzie chodzisz w grupie i pilnujesz, by nikt nie zostawał sam"
      },
      {
        type: "Gryffindor",
        content: "Starasz się rozwiązać zagadkę na własną rękę."
      },
      {
        type: "Slytherin",
        content: "Robisz zakłady, kto będzie następną ofiarą."
      },
    ]
  },
  {
    question: "Na jakiej pozycji chciałbyś grać w quidditcha ?",
    answers: [
      {
        type: "Slytherin",
        content: "Pałkarz"
      },
      {
        type: "Hufflepuff",
        content: "Obrońca "
      },
      {
        type: "Gryffindor",
        content: "Szukający"
      },
      {
        type: "Ravenclaw",
        content: "Ścigający"
      },
    ]
  }
])
};

export default quizQuestions;
