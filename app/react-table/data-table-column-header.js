import React from 'react'
import {BiChevronUp,BiChevronDown} from "react-icons/bi"
import {BsChevronExpand} from "react-icons/bs"
import { cn } from "@/lib/utils"

const DataTableColumnHeader = ({column,title,className}) => {


    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
      }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
        <button className='inline-flex items-center gap-2 py-2'
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
          >
            {title}
            {column.getIsSorted() === "desc" ? (
              <BiChevronDown className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <BiChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <BsChevronExpand className="ml-2 h-4 w-4" />
            )}
          </button>
        </div>
  )
}

export default DataTableColumnHeader