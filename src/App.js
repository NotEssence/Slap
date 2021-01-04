import './App.css'

function splitToChunks(array, parts) {
  let result = []
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)))
  }
  return result
}

function PileItem(props) {
  const color = (() => {
    if (props.suit === 'Hearts' || props.suit === 'Diamonds') {
      return '#ff6257'
    } else {
      return '#111827'
    }
  })()

  return (
    <div className="text-gray-50 bg-green-300 text-3xl font-bold m-3 rounded-md p-2 text-center">
      <div className="m-2">
        { props.kind } of
        <div className="inline font-extrabold text-3xl ml-1 " style={{ color: color }}>
          { props.suit }
        </div>
      </div>
    </div>
  )
}

function Pile(props) {
  return (
    <ul className="h-screen w-1/5 overflow-hidden overflow-y-scroll bg-green-400">
      { props.cards.slice().reverse().map((card, i) => <PileItem {...card} key={i} />) }
    </ul>
  )
}

function App() {
  const deck = [{ kind: "King", suit: "Clubs" }, { kind: "King", suit: "Hearts" }]

  return (
    <div className="flex">
      <Pile cards={deck} />
    </div>
  )
}

export default App;
