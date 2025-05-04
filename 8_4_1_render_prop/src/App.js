import './App.css';

const tahoe_peaks = [
  { name: 'Freel Peak', elevetion: 10891 },
  { name: 'Monument Peak', elevetion: 10067 },
  { name: 'Pyramid Peak', elevetion: 9983 },
  { name: 'Mt. Tallac', elevetion: 9735 }
]

function List({ data = [], renderEmpty, renderItem }) {
  return (!data.length) ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}


function App() {
  return <List
    data={tahoe_peaks}
    renderEmpty={<p>This list is Empty</p>}
    renderItem={item => (
      <>
        {item.name} - {item.elevetion.toLocaleString()}
      </>
    )}
  />
}

export default App;
