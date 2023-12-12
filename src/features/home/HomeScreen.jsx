import Jumbotron from "../../ui/Jumbotron";

function HomeScreen() {
  return (
    <Jumbotron
      alt="Nathan Drake and Sully on a boat surrounded by water"
      src="../../uncharted-poster.jpeg"
    >
      <h1>Uncharted</h1>
      <p>
        Street-smart Nathan Drake is recruited by seasoned treasure hunter
        Victor &quot;Sully&quot; Sullivan to recover a fortune amassed by
        Ferdinand Magellan, and lost 500 years ago by the House of Moncada.
      </p>
    </Jumbotron>
  );
}

export default HomeScreen;
