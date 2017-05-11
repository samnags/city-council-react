import React from 'react'
import Reactable from 'reactable'

var Table = Reactable.Table;

const MemberDetail = (props) => {
    const { attendances } = props
    
    let tableRows = null
    
    if(attendances.length > 0) {
        tableRows = attendances.map((attendance) => {            
        let date = new Date(attendance.meeting.date).toDateString()
          return (
            { 
                Date: date,
                'In Session?': attendance.in_session_format,
                'Attended?': attendance.attended_format            
            }
          )
      })
    }
    
    return (
        <div>
            <h3>By Meeting Date</h3>
            <Table
                className={'table table-bordered table-responsive table-hover'}
                data={tableRows}            
                />
        </div>
        
    )
}

module.exports = MemberDetail