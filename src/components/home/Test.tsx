
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/Reducer';
import { AppDispatch } from '../../store/index';



import { fetchData, selectData} from '../../store/titleSlice';

const Test: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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