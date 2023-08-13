'use client'
import { Button } from '@/components/ui/button';
import { getInitials } from '@/lib/utils';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { ArrowUpDown } from 'lucide-react';
// import { MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table"
import IndeterminateCheckbox from './IndeterminateCheckbox';
import DataTableColumnHeader from './data-table-column-header';
import {FiMoreHorizontal} from "react-icons/fi"

export const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <div className="px-1">
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
        </div>
      ),
      cell: ({ row }) => (
        <div className="px-1">
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    },
    
    {
      header: "ID",
      accessorKey: "id",
      header: ({ column }) => <DataTableColumnHeader column={column}  title="ID"/>
      // enableSorting: false,
      // enableHiding: false,
    },
    {
      header: ({ column }) => <DataTableColumnHeader column={column}  title="First Name"/>,
      accessorKey: "first_name",
      // enableSorting: false,
    },
    {
      header: "Last Name",
      accessorKey: "last_name",
    },
    {
      // header: "Email",
      accessorKey: "email",
      header: ({ column }) => <DataTableColumnHeader column={column}  title="Email"/>
    },
    {
      header: "Gender",
      accessorKey: "gender",
     
    },
    {
      header: "Marrital Status",
      accessorKey: "status",
      cell:({row}) =>{
        if(!row){return null;}
        const status = row.getValue("status")
        return(status?<>Married</>:<>Unmarried</>)
      }
    },
    {
      header: "DOB",
      accessorKey: "dob",
    },
    {
      header: () => <div className="">Members</div>,
      accessorKey: "members",
      cell: ({ row }) => {
        const members = row.getValue("members");
        return (
          <div className="flex -space-x-1 ">
            {members.map((member, idx) => {
              const bgColor =
                idx === 0
                  ? "bg-orange-300"
                  : idx === 1
                  ? "bg-violet-300"
                  : "bg-sky-300";
              return <div key={idx}
                        className={`${bgColor} rounded-full text-[11px] font-semibold w-7 h-7 flex items-center justify-center `}>
                        {getInitials(member)}
                    </div>
              
            })}
          </div>
        );
      },
    },
    {
      id:"action",
      // header:"Actions",
      cell: ({ row }) => {
        const member = row.original
   
        return (
          <DropdownMenu className="bg-white z-10 w-56 absolute ">
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 relative">
                <span className="sr-only">Open menu</span>
                <FiMoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {/* <DropdownMenuLabel >Actions</DropdownMenuLabel> */}
            <DropdownMenuItem>Edit</DropdownMenuItem>

              <DropdownMenuItem className='cursor-pointer'
                onClick={() => navigator.clipboard.writeText(member.email)}
              >
                Copy Email ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        
        )
      },
    },
  ];
