import React, { Component } from 'react';
import './App.css';
import Score from "./components/Score/index";
import Title from "./components/Title/index";
import Card from "./components/Game/index";


const pokeArray = [
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png",
  "https://cdn.bulbagarden.net/upload/thumb/8/8b/149Dragonite.png/250px-149Dragonite.png",
  "https://cdn.bulbagarden.net/upload/thumb/c/c6/094Gengar.png/250px-094Gengar.png",
  "https://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png",
  "https://cdn.bulbagarden.net/upload/thumb/e/e3/145Zapdos.png/250px-145Zapdos.png",
  "https://cdn.bulbagarden.net/upload/thumb/4/4e/144Articuno.png/250px-144Articuno.png",
  "https://cdn.bulbagarden.net/upload/thumb/1/1b/146Moltres.png/250px-146Moltres.png",
  "https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png",
  "https://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png",
  "https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png",
  "https://cdn.bulbagarden.net/upload/thumb/d/d6/052Meowth.png/250px-052Meowth.png"
];

const HIMYMarray = [
  "https://i.pinimg.com/originals/d2/e6/76/d2e676a647615bd5998a4154e8f9d0a1.jpg",
  "https://dvdbash.files.wordpress.com/2012/03/how_i_met_your_mother_dvd_jason_segel_dvdbash1.jpg",
  "https://vignette.wikia.nocookie.net/himym/images/5/5e/Lily.jpg/revision/latest?cb=20110809174952",
  "https://i1.wp.com/www.ofilmante.com.br/wp-content/uploads/2016/12/Robin-1-768x1024.jpg?resize=500%2C667",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4H5ukKL9lWlGEtyOd3OxvuE2ePQXk91FyB23sS28rmOd8x3U",
  "https://vignette.wikia.nocookie.net/how-i-met-your-mother/images/f/f8/How-i-met-your-mother-nora.png/revision/latest/scale-to-width-down/335?cb=20111122222947&path-prefix=de",
  "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/The_Mother_cropped.JPG/220px-The_Mother_cropped.JPG",
  "https://vignette.wikia.nocookie.net/himym/images/2/2b/Stuart.png/revision/latest?cb=20101219033704",
  "https://images2-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=2592002&url=https://www3.fusionmovies.to/img/character/_9__4_3_1_2/afb6495e7dfbd10b89680001de1b8790.jpg?t=1505518849&resize_w=320",
  "https://m.media-amazon.com/images/M/MV5BMTU1NTA0NzI2NV5BMl5BanBnXkFtZTgwNDg4MDMyMjE@._V1_UY268_CR87,0,182,268_AL_.jpg",
  "http://images3.wikia.nocookie.net/__cb20100921145355/himym/images/thumb/a/a0/BigDays25.png/640px-BigDays25.png",
  "https://vignette.wikia.nocookie.net/himym/images/2/20/James_stinson.png/revision/latest?cb=20101216021830"
];

const Friendsarray = [
  "http://www.comedycentral.co.uk/sites/default/files/styles/carousel_wide/public/cc_uk/galleries/2016/09/01/friends-joey2_3039017c_0.jpg?itok=9UVUBHZr",
  "https://i.pinimg.com/originals/ce/e2/93/cee293c448af673464e141f593c00b1c.jpg",
  "https://nypdecider.files.wordpress.com/2016/11/friends-monica.jpg?quality=90&strip=all&w=646&h=431&crop=1",
  "http://s15858.pcdn.co/wp-content/uploads/2017/04/lead-phoebe-buffay.jpg",
  "https://vignette.wikia.nocookie.net/friends/images/5/5c/TOWRoss%27Tan.png/revision/latest?cb=20180612053911",
  "https://i.pinimg.com/originals/df/4c/3e/df4c3eff7b41b5cc694d7e93ccffa872.jpg",
  "https://vignette.wikia.nocookie.net/friends/images/4/48/Carolwillick.jpg/revision/latest?cb=20160529221244",
  "https://vignette.wikia.nocookie.net/friends/images/8/89/MichaelGHagerty.jpg/revision/latest?cb=20140604234819",
  "http://www.comedycentral.co.uk/sites/default/files/styles/image-w-520-h-520-scale/public/cc_uk/galleries/large/2016/05/13/l20.jpg?itok=t8ATYSQh",
  "https://amyjardine.files.wordpress.com/2013/07/friends-janice-2_610.jpg",
  "https://cdn.jwplayer.com/thumbs/4GXDG2AK-720.jpg",
  "https://amp.thisisinsider.com/images/5b6847b4bda1c72e008b4576-750-562.jpg"
]

const goodMessage = "You Guessed Correct!"
const badMessage = "You Guessed Wrong!"
class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    img: pokeArray,
    clicked: [],
    message: "",
  }

  handlePokeTheme = () => {
    //Set img To pokeArray
    this.setState({ img: pokeArray });
    //Reset Game
    this.handleResetGame();
  };

  handleHIMYMTheme = () => {
    //Set img to HIMYMarray
    this.setState({ img: HIMYMarray});
    //Reset Game
    this.handleResetGame();
  };

  handleFriendsTheme = () => {
    //Set img to SimpsonsArray
    this.setState({ img: Friendsarray});
    //Reset Game
    this.handleResetGame();
  }

  //SCORE MECHANICS
  //Reset Game Mechanics
  handleResetGame = () => {
    //Set Score To 0
    this.setState({ score: 0 });
    //Set Top Score to 0
    this.setState({ topScore: 0 });
    //Set Message To Empty
    this.setState({ message: ""});
    //Empty Out clicked
    this.setState({ clicked: []});
  }
  //Reset Score
  handleResetScore = () => {
    //Set Score to 0
    this.setState({ score: 0 });
    //Empty Out clicked
    this.setState({ clicked: []});
  }
  //Top Score Mechanics
  handleTopScore = () => {
    //If Top Score is less than Score
    if (this.state.topScore <= this.state.score) {
      //Set Top Score equal to Score
      this.setState((prevState) => ({
        topScore: prevState.score
      }))
    }
  };
  //Increment Mechanics
  handleIncrement = () => {
    //Increase Score By 1
    this.setState({ score: this.state.score + 1 });
  };

  //Shuffle Mechanics
  shuffle = () => {
    const shuffled = this.state.img.sort(function (a, b) {
      return 0.5 - Math.random()
    });
    this.setState({ img: shuffled })
  }

  //Card Check If Correct Or Wrong
  cardCheck = (event) => { //TRUE DOES NOT CATCH ONLY THE ELSE STATEMENT WORKS
    //If Clicked array includes "URL"
    if (this.state.clicked.includes(event.target.src)) {
      console.log("Url is already in clicked, resetting score")

      this.setState({message: badMessage});

      //Reset Score To 0
      this.handleResetScore();

      console.log(this.state.message)
    }
    else if (this.state.score === 11) {
      this.setState({message: "You Win! Congratulations!"})
      
    }
    else {
      console.log("New url added, score increased");
      //Increase Score
      this.handleIncrement();
      //See If Top Score Needs to Catch Up
      this.handleTopScore();
      //Add img url to Clicked array
      this.setState({ clicked: [...this.state.clicked, event.target.src] });
      //Send Good Message
      this.setState({ message : goodMessage});
      console.log(this.state.message);
    }
  }

  //Click Mechanics
  cardClick = (event) => {
    //Shuffle Cards
    this.shuffle();
    //Check If Wrong Or Right
    this.cardCheck(event);
  }


  render() {
    const images = this.state.img.map(img => {
      return <Card key={img} id={img} url={img} cardClick={this.cardClick} />
    })
    return (
      <div className="App">
        <Score score={this.state.score} topScore={this.state.topScore} reset={this.handleResetGame} resetGame={this.handleResetGame} resetScore={this.handleResetScore} handletopScore={this.handleTopScore} message={this.state.message} pokemon={this.handlePokeTheme} HIMYM={this.handleHIMYMTheme} friends={this.handleFriendsTheme}/>
        <Title />    
        <div className="row">
          {/* <div class="column"> */}
            {images}
          {/* </div> */}
        </div>        
      </div>
    );
  }
}

export default App;