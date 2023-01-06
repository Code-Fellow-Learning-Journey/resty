import React, { useState } from 'react';




const History = (props) => {
  const [history, setHistory] = useState(false);

  const toggleHistory = () => {
    setHistory(!history);
  };

  return (
    <>
      <button onClick={toggleHistory}>Toggle History</button>
      <section className="history">
        {history &&
          props.history.map((item, index) => (
            <div key={index}>
              Data: {JSON.stringify(item.data)}<br />
              Request: {JSON.stringify(item.request)}
            </div>
          ))}
      </section>
    </>
  );
};


export default History;