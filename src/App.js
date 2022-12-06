import "./styles.css";

function App() {
  return (
      <div className="bg-dark text-light main">
        <div className="playground">
          <div className="titilePlayground">
            <p className="">Patio de juegos</p>
          </div>
          <div className="charas">
            <div className="enemyContainer">
              <img
                className="enemy"
                src="https://play.pokemonshowdown.com/sprites/ani-shiny/alakazam-mega.gif" /* Se puede utilizar el nombre extraido de pokeapi para cambiar la imagen del pokemon */
                alt="pkmnEnemy"
              />
            </div>
            <div className="allyContainer">
              <img
                className="ally"
                src="https://play.pokemonshowdown.com/sprites/ani-back-shiny/kecleon.gif"
                alt="pkmAlly"
              />
            </div>
          </div>
          <div className="playgroundFooter">
            <p className="footerP">Que deberia hacer?</p>
            <div className="botones">
              <div>
                <button
                  type="button"
                  className="btn btn-primary m-1 boton"
                  /*data-toggle="tooltip"
                  data-placement="top"*/
                  title="Boton designado para elegir un movimiento"
                >
                  Fight
                </button>
                <button
                  type="button"
                  className="btn btn-primary m-1 boton"
                  /*data-toggle="tooltip"
                  data-placement="top"*/
                  title="Boton designado para elegir un item"
                >
                  Bag
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary m-1 boton"
                  /*data-toggle="tooltip"
                  data-placement="top"*/
                  title="Boton designado para elegir un movimiento"
                >
                  Fight
                </button>
                <button
                  type="button"
                  className="btn btn-primary m-1 boton"
                  /*data-toggle="tooltip"
                  data-placement="top"*/
                  title="Boton designado para elegir un item"
                >
                  Bag
                </button>
              </div>
              
            </div>
          </div>
        </div>

        <div className="logg">
          <div>
            <div className="titleLog">
              <p className="">Battle log</p>
            </div>
            <div className="logContent">
              <div>
                <div className="logContentTitle">
                  <p>Despliega el historial de acciones realizadas.</p>
                </div>
                <div className="contentLogContent">
                  <div className="logList">
                    <p>Pokependej01 ataco a pokependej02 con pokehabilidad </p>
                    <p>Pokependej01 ataco a pokependej02 con pokehabilidad </p>
                    <p>Pokependej01 ataco a pokependej02 con pokehabilidad </p>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
