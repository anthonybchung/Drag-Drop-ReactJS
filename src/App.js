import './App.css';
import { useState } from 'react';
import Box from './components/drag-card/box.component';
import DragCard from './components/drag-card/drag-card.component';

function App() {
  const handleDragStart = (event) => {};

  const handleDragEnd = () => {};

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnter = () => {};

  const handleDragLeave = () => {};

  const handleDragDrop = (event) => {
    event.preventDefault();
    console.log('drop');
    const boxID = parseInt(event.target.id) - 1;
    let array = [...data];
    array[current].full = false;
    array[boxID].full = true;
    setCurrent(boxID);
    setData(array);
  };

  /*************************************/
  /* State */
  const [data, setData] = useState([
    {
      id: 1,
      colour: 'blue',
      full: true,
    },
    {
      id: 2,
      colour: 'blue',
      full: false,
    },
    {
      id: 3,
      colour: 'blue',
      full: false,
    },
    {
      id: 4,
      colour: 'blue',
      full: false,
    },
  ]);

  const [current, setCurrent] = useState(0);

  const boxList = data.map((element, index) => (
    <Box
      key={element.id}
      keyID={element.id}
      style={{ backgroundColor: element.colour }}
      handleDragEnter={handleDragEnter}
      handleDragLeave={handleDragLeave}
      handleDragOver={handleDragOver}
      handleDragDrop={handleDragDrop}
    >
      {element.full && (
        <DragCard
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
      )}
    </Box>
  ));

  return <div className="App">{boxList}</div>;
}

export default App;
