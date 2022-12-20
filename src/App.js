import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './Components/Cart';
import Films from './Components/Films';
import { useState } from 'react';

function App() {
  const [films, setFilms] = useState([
    {
      id: 1,
      title: "Decision to Leave",
      image: {
        jpg: require('./posters/decisiontoleave.jpg')
      },
      synopsis:
        "From a mountain peak in South Korea, a man plummets to his death. Did he jump, or was he pushed? When detective Hae-joon arrives on the scene, he begins to suspect the dead man’s wife Seo-rae. But as he digs deeper into the investigation, he finds himself trapped in a web of deception and desire.",
      year: "2022",
      genre: "Mystery, Thriller, Crime, Drama, Romance",
      tagline: "The Closer You Look, The Harder You Fall",
      days: 0,
      cartDays: 0,
      cart: 0
    },
    {
      id: 2,
      title: "She Said",
      image: {
        jpg: require('./posters/shesaid.jpg')
      },
      synopsis:
        "New York Times reporters Megan Twohey and Jodi Kantor break one of the most important stories in a generation — a story that helped launch the #MeToo movement and shattered decades of silence around the subject of sexual assault in Hollywood.",
      year: "2022",
      genre: "Drama, History",
      tagline: "\"Will you go on the record?\"",
      days: 0,
      cartDays: 0,
      cart: 0
    },
    {
      id: 3,
      title: "Tár",
      image: {
        jpg: require('./posters/tar.jpg')
      },
      synopsis:
        "Renowned musician Lydia Tár is days away from recording the symphony that will elevate her career. When all elements seem to conspire against her, Lydia's adopted daughter Petra becomes an integral emotional support for her struggling mother.",
      year: "2022",
      genre: "Drama, Music",
      tagline: "Time is the essential piece of interpretation",
      days: 0,
      cartDays: 0,
      cart: 0
    },
    {
      id: 4,
      title: "The Banshees of Inisherin",
      image: {
        jpg: require('./posters/thebansheesofinisherin.jpg')
      },
      synopsis:
        "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",
      year: "2022",
      genre: "Drama, Comedy",
      tagline: "Everything was fine yesterday",
      days: 0,
      cartDays: 0,
      cart: 0
    },
    {
      id: 5,
      title: "The Fabelmans",
      image: {
        jpg: require('./posters/thefabelmans.jpg')
      },
      synopsis:
        "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
      year: "2022",
      genre: "Drama",
      tagline: "Capture every moment",
      days: 0,
      cartDays: 0,
      cart: 0
    },
    {
      id: 6,
      title: "The Triangle of Sadness",
      image: {
        jpg: require('./posters/thetriangleofsadness.jpg')
      },
      synopsis:
        "A celebrity model couple are invited on a luxury cruise for the uber-rich, helmed by an unhinged captain. What first appeared Instagrammable ends catastrophically, leaving the survivors stranded on a desert island and fighting for survival.",
      year: "2022",
      genre: "Comedy, Drama",
      tagline: "Sans filtre",
      days: 0,
      cartDays: 0,
      cart: 0
    }
  ]);

  const [cartNum, setCartNum] = useState(0);
  const [cartFilms, setCartFilms] = useState([]);

  function addDay(id) {
    const updatedFilms = films.map((film) => {
      if (film.id === id) {
        return {...film, days: film.days + 1, cartDays: film.cartDays + 1};
      }

      return film;
    })

    setFilms(updatedFilms);
  }

  function removeDay(id) {
    const updatedFilms = films.map((film) => {
      if (film.id === id) {
        return {...film, days: film.days - 1 >= 0 ? film.days - 1 : 0};
      }

      return film;
    })

    setFilms(updatedFilms);
  }

  function refreshCart(id) { 

    let newFilms = films.filter((film) => film.cartDays > 0);
    setCartFilms(newFilms);

    const updatedFilms = films.map((film) => {
      if (film.id === id && film.days > 0) {
        if (film.cart !== 1) {
          setCartNum(cartNum + 1);
        }
        return {...film, days: 0, cartDays: film.cartDays, cart: 1};
      }

        
      return film;
    });

    setFilms(updatedFilms);
  }
  
  function emptyCart() {

  }

  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar cartNum = {cartNum}/>
      <Routes>
        <Route
          path = '/' element = {<Films films={films} add = {addDay} remove = {removeDay} refresh = {refreshCart}/>}
        />
        <Route
          path = '/cart' element = {<Cart films = {cartFilms} empty = {emptyCart}/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
