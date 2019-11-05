import React, { Component } from "react";
import Title from "./title.js";
import Photowall from "./photowall.js";
import images from "./image";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "rose",
          link: images[0],
          alt: "image not able to load"
        },
        {
          id: "1",
          description: "sunflower",
          link: images[1],
          alt: "image not able to load"
        },
        {
          id: "2",
          description: "lotus",
          link: images[2],
          alt: " image not able to load"
        }
      ]
    };
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
  }

  remove(removePost) {
    this.setState(state => ({
      posts: state.posts.filter(post => post !== removePost)
    }));
  }

  add() {
    let temp = {
      id: "3",
      description: "lotus",
      link: images[2],
      alt: "images"
    };
    this.state.posts.push(temp);
    this.setState({ temp });
  }

  render() {
    return (
      <div>
        <Title data={"Photowall"} />
        <Photowall
          post={this.state.posts}
          onRemove={this.remove}
          onAdd={this.add}
        />
      </div>
    );
  }
}
export default Main;