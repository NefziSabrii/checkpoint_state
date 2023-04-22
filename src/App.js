import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    // declaration de l'objet person
    person: {
      fullName: 'Nefzi Sabri',
      bio: 'developer.',
      imgSrc: 'data:image/png;base64,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',
      profession: 'Web Developer'
    },
    show: false,
    interval: null,
    time: 0
  };
  // fonction toggle show pour visonner le profil personne(spectacle booléen)

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  //cycle de vie du composant.
  componentDidMount() {
    const interval = setInterval(() => {
      this.setState(prevState => ({ time: prevState.time + 1 }));
    }, 1000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { person, show, time } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        {/* un bouton qui bascule l'état du spectacle. Lorsque l'état du spectacle est vrai, le profil de la personne apparaît. */}

        <button onClick={this.toggleShow}>{show ? 'Hide' : 'Show'}</button>
        {show && (
          <>
            <img src={person.imgSrc} alt={person.fullName} />
            <br/><br/>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </>
        )}
        {/* un champ qui affiche l'intervalle de temps depuis que le dernier composant a été monté */}
        <p>Time since mounted: {time} seconds</p>
      </div>
    );
  }
}

export default App;

