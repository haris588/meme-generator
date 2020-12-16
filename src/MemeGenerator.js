import React from "react";

class MemeGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      image: "https://i.imgflip.com/1bij.jpg",
      imagesApi: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const randomImage = Math.floor(Math.random() * this.state.imagesApi.length);
    this.setState({ image: this.state.imagesApi[randomImage].url });
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes").then((response) =>
      response.json().then((response) => {
        const { memes } = response.data;
        console.log(memes);
        this.setState({ imagesApi: memes });
      })
    );
  }

  render(){
    return (
      <div className="inputs">
          <form onSubmit={this.handleSubmit}>
            <label name="topText">
              Top text
              <input
                name="topText"
                value={this.topText}
                onChange={this.handleChange}
              ></input>
            </label>
            <label name="bottomText">
              Bottom text
              <input
                name="bottomText"
                value={this.bottomText}
                onChange={this.handleChange}
              ></input>
              <button>Submit</button>
            </label>
          </form>

          <div className="imageContainer">
            <img src={this.state.image} alt="meme" />
            <h2 className="topText">{this.state.topText}</h2>
            <h2 className="bottomText">{this.state.bottomText}</h2>
          </div>
        </div>
    )
  }
}
export default MemeGenerator;