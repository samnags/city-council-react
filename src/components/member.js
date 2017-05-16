import React, { Component } from 'react';
import { connect } from 'react-redux'
import MemberSummary from './member_summary'
import MeetingDetail from './meeting_detail'
import * as BS from 'react-bootstrap'

class Member extends Component { 
    render() {
        const { member } = this.props
                
        if(!member) {
            return <div></div>
        }

        return (
            <div>
                <BS.Col lg={4}>
                    <MemberSummary member={member}/>   
                </BS.Col>
                <BS.Col lg={4}>
                    <MeetingDetail attendances={member.attendances}/>
                </BS.Col>                                
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