import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/Reducer';
import { addRow, updateRow, deleteRow } from '../../../store/slice/table';

import Table from "../components/table"
  


const TodoList: React.FC = () => {
 
  const data = useSelector((state:RootState)=>state.table.data)
  const dispatch = useDispatch()


  const handleAddRow = () => {
    const newRow = { id: 4, fullname: 'Alice', age: 35, location: 'London' };
    dispatch(addRow(newRow))
  };
  const handleUpdateRow = () => {
    const updatedData = { fullname: 'Jane Smith!!!!', age: 27 };
    dispatch(updateRow({ id: 2, newData: updatedData }))
  };
  const handleDeleteRow = () => {
    dispatch(deleteRow(4))
  };

  return (<>
      <Table />
      <button className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddRow}>Add Row</button>
      <button className="mx-2 bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={handleUpdateRow}>Update Row</button>
      <button className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleDeleteRow}>Delete Row</button>
    </>
  );
};

export default TodoList;