import React from "react";
import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  background-color: #fffaf0;
  display: flex;
  justify-content: center;
  padding: 10%;

  h1 {
    font-family: "Berkshire Swash", cursive;
    font-size: 3.5em;
    color: white;
    -webkit-text-stroke: 0.1px #800000;
    text-align: center;
  }

  div {
    width: 100%;
  }

  input {
    font-family: "Roboto", sans-serif;
    font-size: 1em;
    width: 100%;
    height: 5rem;
    box-shadow: 15px 10px #800000;
    border-radius: 4px;
    border: none;
    transition: 0.3s;
    text-align: center;
  }

  input:hover {
    background-color: #d3d3d3;
  }

  button {
    margin-top: 10%;
    background-color: #800000;
    border: none;
    color: white;
    width: 20%;
    height: 2.3em;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 30em;
  }

  button:hover {
    cursor: pointer;
    -webkit-filter: grayscale(50%) brightness(50%);
  }

  ul {
    font-family: "Roboto", sans-serif;
    font-size: 1.5em;
    text-decoration: underline;
  }

  li {
    list-style-type: none;
  }

  li:before {
    content: "♡";
    display: block;
    float: left;
    width: 1.2em;
    color: #800000;
  }

  .X {
    width: 1.5em;
    height: 1.5em;
  }
`;

export default class App extends React.Component {
  state = {
    task: "",
    list: []
  };
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  add = () => {
    if (this.state.task !== "" && !this.state.task.match(/^[  \t]+$/)) {
      this.setState({
        list: this.state.list.concat({
          task: this.state.task,
          id: Date.now()
        }),
        task: ""
      });
    }
  };
  remove = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id)
    });
  };
  render() {
    return (
      <Main>
        <div>
          <h1>to do list</h1>
          <input onChange={this.handleChange} value={this.state.task} />
          <button onClick={this.add}>Adicionar</button>
          {this.state.list.map((rastreador) => (
            <div>
              <ul>
                <li>{rastreador.task}</li>
              </ul>
              <button class="X" onClick={() => this.remove(rastreador.id)}>
                X
              </button>
            </div>
          ))}
        </div>
      </Main>
    );
  }
}
