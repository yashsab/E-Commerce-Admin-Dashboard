import React from 'react';
import "./userList.css";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { userRows } from "../../dummydata";
import {Link} from "react-router-dom";
import {useState} from "react";
export default function UserList(){
  const [data,setData]=useState(userRows);
  const handleDelete=(id)=>{
    setData(data.filter(item=>item.id!== id));
  }
  


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'Username', width: 130,renderCell: (params)=>{
          return(
            <div className='userListUser'>
              <img className='userListImg' src={params.row.avatar} alt=""/>
              {params.row.username}
            </div>
          )
        } },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 90,
        },
       {
        field:"action",
        headerName:"Action",width:150,
        renderCell:(params)=>{
          return(
            <>
            <Link to={"/user/"+params.row.id}>
            <button className="userListEdit">Edit</button></Link>
            <DeleteIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
            </>
          )
        }
       }
      ];
      
      
      
    return(
        <div className='userList'>
<DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
        </div>
    )
}