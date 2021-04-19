import React, { Component } from "react";
import "../styles/OrderPage.css";

import { NavLink } from "react-router-dom";
// import OrderPageNoActive from "./OrderPageNoActive";

import pinguin from "../images/Products/pluszak.png";
import krolik from "../images/Products/królik.png";
import owieczka1 from "../images/Products/owieczka/owieczka1.jpg";
import króliczka1 from "../images/Products/króliczka/króliczka1.jpg";
import hipcio1 from "../images/Products/hipcio/hipcio1.jpg";
import misiekBiały1 from "../images/Products/misiekBiały/misiekBiały1.jpg";
import piesek1 from "../images/Products/piesek/piesek1.jpg";

class OrderPage extends Component {
  state = {
    active: true,
    activePluszaki: false,
    activePufy: false,
    activeKoce: false,
    activePoduszki: false,
    activeKosze: false,
  };
  handleChangeState = () => {
    this.setState({
      active: true,
      activePluszaki: false,
      activePufy: false,
      activeKoce: false,
      activePoduszki: false,
      activeKosze: false,
    });
  };
  handleChangeStatePluszaki = () => {
    this.handleChangeState();
    this.setState({
      activePluszaki: true,
    });
  };
  handleChangeStatePufy = () => {
    this.handleChangeState();
    this.setState({
      activePufy: true,
    });
  };
  handleChangeStateKoce = () => {
    this.handleChangeState();
    this.setState({
      activeKoce: true,
    });
  };
  handleChangeStatePoduszki = () => {
    this.handleChangeState();
    this.setState({
      activePoduszki: true,
    });
  };
  handleChangeStateKosze = () => {
    this.handleChangeState();
    this.setState({
      activeKosze: true,
    });
  };

  render() {
    return (
      <>
        <div className="orderBg"> </div>
        <div
          onClick={() => this.setState({ active: false })}
          className={this.state.active ? "ring" : "ring activeOrder"}
        >
          {/* {this.state.active ? null : (
            <h1 className="titleProducts">Wybierz interesujący Cię produkt</h1>
          )} */}
          {!this.state.active ? null : (
            <div className="easyOrder">
              <h1 className="easyOrderha">To proste - wybierz produkt,</h1>
              <h1 className="easyOrderhb">a ja go dla Ciebie wyszydełkuję!</h1>
            </div>
          )}
          {!this.state.activePluszaki ? null : (
            <h1 className="titleProducts">Wybierz interesujący Cię produkt</h1>
          )}
          <h2
            className={this.state.active ? "chooseCategory" : "chooseCategory2"}
          >
            wybierz <br /> kategorie
          </h2>
          <button onClick={this.handleChangeStatePluszaki} className="pluszaki">
            <p>Pluszaki</p>
          </button>
          <button onClick={this.handleChangeStatePufy} className="pufy">
            <p>Pufy</p>
          </button>
          <button onClick={this.handleChangeStateKoce} className="koce">
            <p>Koce</p>
          </button>
          <button onClick={this.handleChangeStatePoduszki} className="poduszki">
            <p>Poduszki</p>
          </button>
          <button onClick={this.handleChangeStateKosze} className="kosze">
            <p>Kosze</p>
          </button>
        </div>
        {this.state.activePluszaki ? (
          <div className="orderList pluszakiList">
            <button
              style={{ color: "black" }}
              onClick={this.handleChangeState}
              className="buttonBuyPage"
            >
              <i class="far fa-times-circle"></i>
            </button>
            <span>
              Chyba każde dziecko musi mieć swoją własną przytulankę. Tu
              znajdziesz ręcznie wyszydełkowane zabawki z bawełnianej włóczki,
              które Twoje dziecko pokocha{" "}
              <i style={{ marginLeft: 20 }} class="fas fa-heart"></i>
            </span>
            <ul>
              <li>
                <NavLink className="link" to="/pingwin">
                  <img src={pinguin} alt="pinguin" />
                  <p>PINGWINEK</p>
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/owieczka">
                  <img src={owieczka1} alt="owieczka" />
                  <p>OWIECZKA</p>
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/zajaczek">
                  <img src={krolik} alt="zajaczek" />
                  <p>ZAJĄCZEK</p>
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/kroliczka">
                  <img src={króliczka1} alt="rabbit" />
                  <p>KRÓLICZKA</p>
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/hipcio">
                  <img src={hipcio1} alt="hipcio" />
                  <p>HIPCIO</p>
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/bialyMis">
                  <img src={misiekBiały1} alt="bialyMis" />
                  <p>BIAŁY MIŚ</p>
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/piesek">
                  <img src={piesek1} alt="piesek" />
                  <p>PIESEK</p>
                </NavLink>
              </li>
            </ul>
          </div>
        ) : null}
        {this.state.activePufy ? (
          <div className="orderList pufyList">
            {" "}
            <button
              style={{ color: "black" }}
              onClick={this.handleChangeState}
              className="buttonBuyPage"
            >
              <i class="far fa-times-circle"></i>
            </button>
            <h1 style={{ fontSize: 50 }}>
              STRONA W TRAKCIE PRAC... <br /> <br />
              SPRAWDŹ ZAKŁADKĘ PLUSZAKI
            </h1>
          </div>
        ) : null}
        {this.state.activeKoce ? (
          <div className="orderList koceList">
            <button
              style={{ color: "black" }}
              onClick={this.handleChangeState}
              className="buttonBuyPage"
            >
              <i class="far fa-times-circle"></i>
            </button>
            <h1 style={{ fontSize: 50 }}>
              STRONA W TRAKCIE PRAC... <br /> <br />
              SPRAWDŹ ZAKŁADKĘ PLUSZAKI
            </h1>
          </div>
        ) : null}
        {this.state.activePoduszki ? (
          <div className="orderList poduszkiList">
            <button
              style={{ color: "black" }}
              onClick={this.handleChangeState}
              className="buttonBuyPage"
            >
              <i class="far fa-times-circle"></i>
            </button>
            <h1 style={{ fontSize: 50 }}>
              STRONA W TRAKCIE PRAC... <br /> <br />
              SPRAWDŹ ZAKŁADKĘ PLUSZAKI
            </h1>
          </div>
        ) : null}
        {this.state.activeKosze && (
          <div className="orderList koszeList">
            <button
              style={{ color: "black" }}
              onClick={this.handleChangeState}
              className="buttonBuyPage"
            >
              <i class="far fa-times-circle"></i>
            </button>
            <h1 style={{ fontSize: 50 }}>
              STRONA W TRAKCIE PRAC... <br /> <br />
              SPRAWDŹ ZAKŁADKĘ PLUSZAKI
            </h1>
          </div>
        )}
      </>
    );
  }
}

export default OrderPage;