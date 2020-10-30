import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import '../index.css';
import { addMovies } from '../actions'
//import { ReactComponent } from '*.svg';

class App extends React.Component {
componentDidMount() {
  //api call to get movies
  const {store} = this.props ;
  store.subscribe(() => {
    console.log("UPDATED");
    this.forceUpdate();

  });

  //dispatch action
  /*
  this.props.store.dispatch(
    //we are hardcoding this action object wich is not a good practise
    {
    type: 'ADD_MOVIES' ,
    movies: data
  });
*/
store.dispatch(addMovies(data));

  console.log('STATE', this.props.store.getState());
}



render()
{
  const { list } = this.props.store.getState(); //{ list:[] , favourites:[]}
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
            {list.map((movie, index)=>(
              <MovieCard movie = {movie} key= {`movies-${index}`} />
            ))

            }
        </div>
      </div>
    </div>
  );

}
}

export default App;
