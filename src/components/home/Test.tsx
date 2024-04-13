
import React from 'react';


const Test: React.FC = () => {



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