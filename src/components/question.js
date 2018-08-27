
import React from 'react';

function Question(props) {

  return (
    <h2 className="Z czego chciałbyś/chciałabyś słynąć?">{props.content}</h2>
    <h2 className="Co jest dla Ciebie najważniejsze?">{props.content}</h2>
    <h2 className="Jaki jest Twój ulubiony przedmiot?">{props.content}</h2>
    <h2 className="Kim chciałbyś zostać w przyszłości?">{props.content}</h2>
    <h2 className="Wszedłeś/aś do zaczarowanego ogrodu. Co byłoby najbardziej zachęcające do zbadania jako pierwsze?">{props.content}</h2>
    <h2 className="Raz na sto lat, bez rozwija kwiaty, które dostosowują swój zapach, do przyciągnięcia nieostrożnych osób. Jeśli zwabiłyby Ciebie, jaki miałyby zapach?">{props.content}</h2>
    <h2 className="Jakie zwierzę wybierasz?">{props.content}</h2>
    <h2 className="Twój przyjaciel wpadł w tarapaty, ściągając na egzaminie z Historii Magii. Właśnie oczekuje w gabinecie opiekuna domu na reprymendę. Co robisz?">{props.content}</h2>
    <h2 className="W Hogsmeade organizowany jest koncert Fatalnych Jędz, ale masz do napisania esej na Transmutację.">{props.content}</h2>
    <h2 className="Zbliża się mecz Quidditcha. Aby wygrać:">{props.content}</h2>
    <h2 className="Z czego zrobiłbyś swoją różdżkę?">{props.content}</h2>
    <h2 className=" Zbliża się spotkanie Klubu Pojedynków. Czego oczekujesz?Uważasz to za stratę czasu – konflikty powinno się rozwiązywać poprzez dyskusję. ">{props.content}</h2>
    <h2 className="W którym wydziale ministerstwa mógłbyś pracować? ">{props.content}</h2>
    <h2 className="Dochodzi do tajemniczych napaści, mówi się, że Komnata Tajemnic została otwarta.">{props.content}</h2>
    <h2 className="Na jakiej pozycji chciałbyś grać w quidditcha ?">{props.content}</h2>


  );

}






Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;

