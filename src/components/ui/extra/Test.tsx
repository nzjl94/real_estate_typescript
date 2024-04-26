
import React from 'react';


const Test: React.FC = () => {

  // const handleAddTodo = () => {
  //   if (inputValue.trim() !== '') {
  //     dispatch(addTodo(inputValue.trim()));
  //     setInputValue('');
  //   }
  // };

  // const handleToggleTodo = (id: number) => {
  //   dispatch(toggleTodo(id));
  // };

  return (
    <div>
      <h2>Data Display</h2>
      <ul>
        {/* {Object.keys(data).map((key,index) => (
          <li key={index}>
            {data[key as keyof typeof data]["title"]}
            <p>
              {data[key as keyof typeof data]["content"]}
            </p>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Test;