import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/Reducer';
import React, {useReducer,useState} from 'react';


import {TableRow} from '../../../utility/typeStore';


import {createColumnHelper,flexRender,getCoreRowModel,useReactTable,} from '@tanstack/react-table'


const columnHelper = createColumnHelper<TableRow>()

const columns = [
  columnHelper.accessor('location', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.fullname, {
    id: 'fullname',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Full Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('is_admin', {
    header: () => <span>Actions</span>,
    footer: info => info.column.id,
  }),
  // columnHelper.accessor('status', {
  //   header: 'Status',
  //   footer: info => info.column.id,
  // }),
  // columnHelper.accessor('progress', {
  //   header: 'Profile Progress',
  //   footer: info => info.column.id,
  // }),
]

const Table=() => {


  // const [data, _setData] = useState(() => [...useSelector((state:RootState)=>state.table.data)])
  const data     =  useSelector((state:RootState)=>state.table.data)

  const rerender = useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  )
}
export default Table;