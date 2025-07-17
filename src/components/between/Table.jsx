import React from 'react'
import DataTable from 'react-data-table-component'
import {Link} from "react-router-dom";
import HeadingXl from '../utilities/HeadingXl';

function Table() {
    const columns = [
        {
          name: "Notice",
          selector: row => row.notice,
          cell: row => (
            <Link
              to={row.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {row.notice}
            </Link>
          )
        },
        {
          name: "Published Date",
          selector: row => row.published
        },
        {
          name: "Description",
          selector: row => row.description
        },
        {
          name: "Duration",
          selector: row => row.duration
        },
        {
          name: "Last Date",
          selector: row => row.last
        },
        {
          name: "Department",
          selector: row => row.department
        }
      ]


const tableData =[
    {
        notice: "Notice 1",                                   
        published: "2022/04/12",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quoas.",
        duration: "2 months",
        last: "L2071/01/22",
        department: "Department of CSE",
         link: "/notice/link"                                                                                  
    },
    {
        notice: "Notice 2",                                   
        published: "2022/04/12",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quaos.",
        duration: "2 months",
        last: "L2071/01/9622",
        department: "Department of CSE 2",
         link: "/notice/link"                                                                                  
    },
    {
        notice: "Notice 3",                                   
        published: "2022/04/12",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qudos.",
        duration: "22 months",
        last: "L2071/01/922",
        department: "Department of CSE 3",
         link: "/notice/link"                                                                                  
    },
    {
        notice: "Notice 4",                                   
        published: "2022/04/12",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quwdwae, quos.",
        duration: "13 months",
        last: "L2071/01/422",
        department: "Department of CSE 4",
         link: "/notice/link"                                                                                  
    },
    {
        notice: "Notice 5",                                   
        published: "204/04/12",
        description: "lorem ipsum dolor sit amet consectetur adipisicing eldwdwit. Quae, quos.",
        duration: "343 months",
        last: "L2071/01/262",
        department: "Department of CSE 5",
         link: "/notice/link"                                                                                  
    },
    {
        notice: "Notice 6",                                   
        published: "2022/04/12",
        description: "lorem ipsum dolor sit amet consectetur adipisicingdwd elit. Quae, quos.",
        duration: "3 months",
        last: "L2071/01/222",
        department: "Department of CSE 6",
         link: "/notice/link"                                                                                  
    },
    {
        notice: "Notice 7",                                   
        published: "2022/04/12",
        description: "lorem ipsum dolor sit amet consectetur adipisicing eldwit. Quae, quos.",
        duration: "5 months",
        last: "L2071/01/2212",
        department: "Department of CSE 7",
         link: "/notice/link"                                                                                  
    }
]

const rootStyles = getComputedStyle(document.documentElement);
const mainBg = rootStyles.getPropertyValue('--mainbg').trim();
const mainColor = rootStyles.getPropertyValue('--mainColor').trim();

const customStyles = {
  table: {
    style: {
      backgroundColor: 'black'
    }
  },
  headRow: {
    style: {
    //   backgroundColor: '#111',
    //   color: '#fff'
    }
  },
  rows: {
    style: {
      backgroundColor: mainBg,
      color: mainColor,
    }
  },
  pagination: {
    style: {
      backgroundColor:'red',
      color: 'white'
    }
  }
};

  return (
    <div  style={{ backgroundColor: 'var(--mainbg)', padding: '1rem', borderRadius: '8px' }}>
        <HeadingXl text={"Tender Notice"}></HeadingXl>
      <DataTable
       columns={columns} 
       data={tableData}
       fixedHeader
       pagination 
       highlightOnHover
       pointerOnHover
       customStyles={customStyles}
       />
    </div>
  )
}

export default Table
