// Exercise 2: Set It Up
// write a class component
// make it a div with a class name of Likes
// write a span and a button element inside
// export default the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
// add a constructor with initial state
// add a button to the rendered JSX with an onClick attribute
// add a method to handle the click/ change the state
// hook up the button text to the state
// BONUS: Create a likes counter
// take in a prop for the number of likes
// increase or decrease the likes based on whether button click is like/ unlike
// hint: take the total likes as a prop, and convert it to state

import React from "react";

class Likes extends React.Component {
  state = {
    liked: false,
    likes: this.props.likes
  };

  handleLike = () => {
    this.setState({
      liked: !this.state.liked
    });
    this.countLikes();
  };

  countLikes = () => {
    const likes = this.state.likes;
    this.setState({
      likes: this.state.liked === true ? likes - 1 : likes + 1
    });
  };

  render() {
    const { likes } = this.state;
    return (
      <div className="Likes">
        <input type="button" value={likes} />
        <button onClick={this.handleLike}>
          {this.state.liked ? "Liked" : "Not liked(yet)"}
        </button>
      </div>
    );
  }
}

export { Likes as default };
