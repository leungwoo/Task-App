import React from "react";
import memeData from "../memeData";

export const Home = (props) => {
    const memeArr = memeData.data.memes;
    const [squares, setSquares] = React.useState(memeArr);
    const [color, setColor] = React.useState(props.darkMode);

    const styles = { backgroundColor: color ? "#fff" : "#cccccc" };
    const handleToggle = () => {
        setColor(prevcolor => !prevcolor);
    };
    const memeNames = squares.map(item =>
    (<div
        className="names"
        style={styles}
        onClick={handleToggle}
        key={item.id}>
        {item.name}
    </div>));



    return (

        <div className="home">
            {/* <button onClick={handleToggle}>Change Color</button> */}
            {memeNames}

        </div>



    );
};

//  //OR
//  const cashInWallet = 80;
//  const creditAmount = 0;
//  const price = 40;
//  const canBuyWithCard = creditAmount >= price;
//  const canBuyWithCash = cashInWallet >= price;
//  const canBuy = canBuyWithCard || canBuyWithCash;

//  //console.log(canBuy);
//  //function declaration
//  function buildHouse(numberOfFloors, color) {
//      const house = `${numberOfFloors}-Floor House with color ${color}`;
//      return house;
//  }

//  const smallHouse = buildHouse(2, 'red');
//  const bigHouse = buildHouse(9, 'none');

//  //function expression onlmy works when it comes before initialization

//  const isEven = function (number) {
//      return number % 2 === 0;
//  };

//  //console.log(isEven(4));

//  const age = 8;


//  // } else {
//  //     console.log('go home you are not old enough');

//  // }

//  //string length
//  const a = 'Richard';
//  const b = 'Kellyann';

//  const shortest = (a.length > b.length) ? b : a;

//  //iteration of string


//  //for (let index = name.length - 1; index >= 0; index--) { console.log(name[index]); }
//  const name = 'Richard';
//  //for (let letter of name) { console.log(letter); }

//  //Substrings
//  // const word = 'abcdebc';
//  // const part = 'bc';
//  // console.log(
//  //     word.includes(part, 2),
//  //     word.indexOf(part),
//  //     word.lastIndexOf(part),
//  //     word.startsWith(part),
//  //     word.endsWith(part));

//  //Case insensitive Search

//  const phone = 'Apple iPhone 11';
//  const search = 'iph';
//  const condition = phone.toLowerCase().includes(search);

//  //if (condition) {
//  // console.log('found!');
//  //} else { console.log('not found!'); }


//  const text = 'My name is Misha';
//  let spacesCount = 0;

//  for (let i = 0; i < text.length; i++) {
//      // count how many spaces there are in the string
//      if (text[i] === 'e') {
//          spacesCount++;
//      }
//  }
//  //console.log(spacesCount); // 3


//  const text1 = 'I have 4 dogs';
//  //we don't have dogs
//  const text2 = `We don't ${text1.slice(2, 6)} ${text1.slice(8, 13)}`;
//  //console.log(text2);

//  // function decryptMessage(message) {
//  //     let result = '';
//  //     for (let i = message.length - 1; i >= 0; i--) {
//  //         result = result + message[i];
//  //         return (result);
//  //     }

//  // }
//  // decryptMessage('this is richard?');

//  function isWerewolf(target) {

//      let targetInLowerCase = target.toLowerCase();
//      let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//      let direct = '';
//      let reversed = '';

//      for (let element of targetInLowerCase) {
//          if (alphabet.includes(element)) {
//              direct += element;
//              reversed = element + reversed;
//          }

//          if (direct === reversed) { return true; } else { return false; }

//      }

//  }
//  isWerewolf('FO');

//  function greeting(name) {
//      const date = new Date();
//      const hours = date.getHours();

//      let timeOfDay;
//      if (hours >= 4 && hours < 12) { timeOfDay = 'morning'; }
//      else if (hours >= 12 && hours < 17) { timeOfDay = 'afternoon'; }
//      else if (hours >= 17 && hours < 20) { timeOfDay = 'evening'; }
//      else { timeOfDay = 'night'; }

//      console.log(`Good ${timeOfDay}, ${name}!`);
//      return `Good ${timeOfDay}, ${name}!`;
//  }

//  greeting("Bob");

