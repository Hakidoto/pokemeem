import "./styles.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 left">
          <div className="core text-center mx-auto">
            <p>Main screen</p>
          </div>
          <img
            className="pkmnEnemy"
            src="https://play.pokemonshowdown.com/sprites/ani-shiny/alakazam-mega.gif" /* Se puede utilizar el nombre extraido de pokeapi para cambiar la imagen del pokemon */
          />
          <img
            className="pkmnAlly"
            src="https://play.pokemonshowdown.com/sprites/ani-back-shiny/kecleon.gif"
          ></img>
          <div className="playerBox text-start mx-auto">
            <p>Que deberia hacer?</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="tooltip"
                data-placement="top"
                title="Boton designado para elegir un movimiento"
              >
                Fight
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="tooltip"
                data-placement="top"
                title="Boton designado para elegir un item"
              >
                Bag
              </button>
            </div>
          </div>
        </div>

        <div className="col-6 middle">
          <div className="core text-center mx-auto">
            <p>Battle log</p>
          </div>
          <div className="battleLog text-center mx-auto">
            <p>Despliega el historial de acciones realizadas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
