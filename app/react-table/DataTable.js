"use client";

import React, { useMemo, useState } from "react";
// 
import { Button } from "@/components/ui/button";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  VisibilityState,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DatatablePagination from "./DatatablePagination";




const DataTable = ({ columns, mockData }) => {
  const data = useMemo(() => mockData, []);
  const [filtering, setFiltering] = useState("");
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      globalFilter: filtering,
      sorting,
      columnVisibility,
      rowSelection,
    },
    onGlobalFilterChange: setFiltering,
    onSortingChange: setSorting,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
  });

  
  return (
    <>
    <div className="flex gap-6 mt-6 flex-col md:flex-row flex-wrap">
        <div className="flex gap-6">
          <label htmlFor="">Global Filter</label>
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            className="border"
          />
        </div>
        <div className="flex gap-6 items-center"> <label htmlFor="" className="">Show rows</label>
          <select name="" id="" onChange={(e) => table.setPageSize(e.target.value)} className="border inline-flex gap-4 w-[70px] cursor-pointer rounded-md p-1">
            {['10','20','30','40','50'].map(row => <option key={row} value={row} className="mt-2">{row}</option>)}
          </select>
        </div>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    <div className="rounded-md  w-full border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-gray-100 ">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="font-bold text-black ">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

    </div>
    <div className="flex gap-4 justify-between items-center mt-4 mb-6 flex-col sm:flex-row">
     
       <DatatablePagination table={table} rowSelection={rowSelection}/>
        
        
      </div>
  </>
  );
};

export default DataTable;
