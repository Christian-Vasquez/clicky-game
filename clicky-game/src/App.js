import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    totalScore: 0,
    cdFriends: friends.slice(0),
    cardFriendsArray: friends.slice(0)
  };

  scoreCount = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cardFriendsArray = this.state.cardFriendsArray.sort(()=> Math.random() - 0.5);

    const cdFriends = this.state.cdFriends

    for (let i=0; i < cdFriends.length; i++)
    {
      console.log("Array: " + this.state.cardFriendsArray[i].name);
      if (id === cdFriends[i].id)
      {
        this.state.totalScore = this.state.totalScore + 1;
        console.log("Score: " + this.state.totalScore);
        
        console.log("Current ID: " + cdFriends[i].name);

        cdFriends.splice(i, 1);

        console.log("Deletion State: " + cdFriends.length);
        //console.log("id: " + id +" Match: " + cardFriends[i].id);
      }
    }
    console.log("cdFriends", cdFriends);
    console.log("cardFriendsArray: ",cardFriendsArray);
    this.setState({ cardFriendsArray, cdFriends});
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.cardFriendsArray.map(friend => (
          <FriendCard
            scoreCount={this.scoreCount}
            id={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
