import React from 'react';

const MemberSummary = (props) => {    
    const { member } = props      
    return (                        
        <div className='member-info'>
            <div className='membersummary'>
                <h4>Name: {`${member.first_name} ${member.last_name}`}</h4>
                <h4>District: {member.district}</h4>
                <h4>Party: {member.party}</h4>
            </div>
            <div className='meetingsummary'>
                <table>
                    <tbody>
                        <tr>
                            <td>Meetings missed:</td>
                            <td>{member.missed}</td>
                        </tr>
                        <tr>
                            <td>Meetings attended:</td>
                            <td>{member.meetings_attended_count}</td>
                        </tr>
                        <tr>
                            <td>Should Have Attended:</td>
                            <td>{member.should_have_attended_count}</td>
                        </tr>
                    </tbody>
                </table>                            
            </div>
        </div>
        );
}
    
module.exports = MemberSummary