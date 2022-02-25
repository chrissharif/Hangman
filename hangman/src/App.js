import './App.css';

function App() {

  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  return (
    <div className="page">
      <header className='header'>Hangman</header>
      <h1 className='how-to-play'>How to Play: Guess a letter, if it's
        in the word, it will appear in the correct spot.
        If not, the hangman will start to appear. Guess
        the word before you hang the man!
      </h1>
      <div className='letters'>
        {alphabet.map(letter =>
          <div className='alphabet'>{letter}</div>
        )}
      </div>
    </div>
  );
}

export default App;
