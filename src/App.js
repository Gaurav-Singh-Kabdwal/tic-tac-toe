import Box from "./Box";
import "./App.css";
import { useState } from 'react';

function App() {

  const [moves, setMoves] = useState({ a: "", b: "", c: "", d: "", e: "", f: "", g: "", h: "", i: "" });
  const [toggle, setToggle] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [count, setCount] = useState(1);
  const [winner, setWinner] = useState("");

  function click(id) {

    const { a, b, c, d, e, f, g, h, i } = {...moves,[id]:toggle ? "O" : "X"};

    if (moves[id] === "") {

      setMoves((prevMoves) => {
        const mark = toggle ? "O" : "X";
        return {...prevMoves,[id]:mark};
      });


      setCount((prevCount) => {
        return prevCount + 1;
      });
      setToggle((prevToggle) => {
        return !prevToggle;
      });

      if(count>=9){
        setWinner("Its a Draw");
        setGameOver(true);
        setCount(1);
        setMoves({ a: "", b: "", c: "", d: "", e: "", f: "", g: "", h: "", i: "" });
      }


    }

    console.log(moves, a, b, c,d,e,f,g,h,i);

    if (((a === b) && (b === c)) || ((((a === d) && (d === g))) || ((a === e) && (e === i)))) {

      if (a !== "") {
        setWinner("Winner : " + a);
        setGameOver(true);
        setCount(1);
        setMoves({ a: "", b: "", c: "", d: "", e: "", f: "", g: "", h: "", i: "" });
      }
    }
    else if (((d === e) && (e === f)) || ((b === e) && (e === h))) {
      if (e !== "") {
        setWinner("Winner : " + e);
        setGameOver(true);
        setCount(1);
        setMoves({ a: "", b: "", c: "", d: "", e: "", f: "", g: "", h: "", i: "" });
      }

    }
    else if (((g === h) && (h === i)) || ((c === f) && (f === i))) {
      if (i !== "") {
        setWinner("Winner : " + i);
        setGameOver(true);
        setCount(1);
        setMoves({ a: "", b: "", c: "", d: "", e: "", f: "", g: "", h: "", i: "" });
      }
    }
    console.log(count);
  }


  return (<div>
    <div className="end">
      <h1><strong>Tic-Tac-Toe</strong></h1>
    </div>
    {
      gameOver
        ?
        <div className="end">
          <h1 >{winner}</h1>
          <button onClick={() => setGameOver((prev) => {
            return !prev;
          })}>Play Again!</button>
        </div>
        :
        <div className="end">
          <div className="container">
            {Object.keys(moves).map((move, i) => {
              const val = String.fromCharCode(97 + i);
              return <Box key={i+1} getClick={click} name={val} mark={moves[val]} />
            })}
          </div>
        </div>
    }
  </div>
  );

}



export default App;
