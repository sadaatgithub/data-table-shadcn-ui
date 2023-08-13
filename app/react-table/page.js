import React from 'react'
import DataTable from './DataTable'
import { columns } from './column'
import mockData from "../../data/MOCK_DATA.json"

  

const Index = () => {
   
      

  return (
    <DataTable columns={columns} mockData={mockData}/>
  )
}

export default Index