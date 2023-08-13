import React from 'react'
import {BsChevronDoubleLeft,BsChevronDoubleRight,BsChevronLeft,BsChevronRight} from "react-icons/bs"
const DatatablePagination = ({table,rowSelection}) => {
    const {
        setPageIndex,
        getCanPreviousPage,
        getCanNextPage,
        getPageCount,
        previousPage,
        nextPage,
        getPreFilteredRowModel,
        getState,
      } = table;
  return (
    <>
     <div className="text-gray-400 text-sm">
          {Object.keys(rowSelection).length} of{" "}
          {getPreFilteredRowModel().rows.length}  Row(s) Selected
        </div>
    <div className="flex gap-8 justify-end">
    <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page &nbsp; <strong>{getState().pagination.pageIndex + 1}</strong>&nbsp; of{" "}
          {getPageCount()}
        </div>
    <div className="flex gap-2 [&>button]:h-8 [&>button]:w-8 [&>button]:border [&>button]:border-gray-300 [&>button]:rounded-md [&>button]:grid [&>button]:place-items-center
    [&>button:disabled]:opacity-50 [&>button:disabled]:border-gray-200 ">
     
    
    <button disabled={!getCanPreviousPage()} onClick={() => setPageIndex(0)}><BsChevronDoubleLeft className='w-4 h-4 font-medium'/></button>
    <button disabled={!getCanPreviousPage()} onClick={previousPage}>
      <BsChevronLeft className='w-4 h-4 font-medium'/>
    </button>
    <button disabled={!getCanNextPage()} onClick={nextPage}>
      <BsChevronRight className='w-4 h-4 font-medium'/>
    </button>
    <button disabled={!getCanNextPage()} onClick={() => setPageIndex(getPageCount() - 1)}>
      <BsChevronDoubleRight className='w-4 h-4 font-medium'/>
    </button>
    
    </div>
    </div>
    </>
  )
}

export default DatatablePagination