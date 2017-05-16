import React from 'react'
// import Reactable from 'reactable'
import ReactTable from 'react-table'
import 'react-table/react-table.css'


// var Table = Reactable.Table;

const MemberDetail = (props) => {
    const { attendances } = props
    const data = attendances    
    // console.log(data[0])
    // debugger
    const columns = [                
        {
            id: 'date',            
            Header: 'Date',                      
            accessor: d => d.date_format
        },
        {
            id: 'attended',
            Header: 'Attended?',            
            accessor: d => d.attended_format
        }
    ]    
    

    
    return (
        <div>
            <h3>By Meeting Date</h3>
            <div className='meetingdetails'>            
                <ReactTable            
                    columns={columns}                
                    data={data}  
                    sortable={true}
                    defaultPageSize={10}
                    showPagination={true}
                    showPageSizeOptions={false}
                    defaultSorted={[{ 
                            id: 'date', 
                            asc: true}
                        ]}                
                    defaultSortMethod={(a,b) => {                                            
                        // if(typeof(a) === "string" && a.endsWith('%')) {                        
                            let newA = new Date(a)
                            let newB = new Date(b)
                            return ((newA < newB) ? 1 : ((newA > newB) ? -1 : 0));
                        // } else {
                        //     return ((a < b) ? 1 : ((a > b) ? -1 : 0));   
                        // }                     
                    }}
                />
            </div>
        </div>
        
    )
}

module.exports = MemberDetail