import React, { Component } from 'react';
import { connect } from 'react-redux'
import MemberSummary from './member_summary'
import MemberDetail from './member_detail'
import * as BS from 'react-bootstrap'

class Member extends Component { 
    render() {
        const { member } = this.props
                
        if(!member) {
            return <div></div>
        }

        return (
            <div className="member">
                <BS.Col lg={3}>
                    <MemberSummary member={member}/>   
                </BS.Col>
                <BS.Col lg={4}>
                    <MemberDetail attendances={member.attendances}/>
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