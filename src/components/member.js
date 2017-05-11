import React, { Component } from 'react';
import { connect } from 'react-redux'
import MemberSummary from './member_summary'
import MemberDetail from './member_detail'

class Member extends Component { 
    render() {
        const { member } = this.props
                
        if(!member) {
            return <div>Select a member</div>
        }

        return (
            <div>
                <MemberSummary member={member}/>   
                <MemberDetail attendances={member.attendances}/>
            </div>         
        )
    }
}

function mapStateToProps(state) {    
    return {
        member: state.activeMember
    }
}

export default connect(mapStateToProps)(Member);