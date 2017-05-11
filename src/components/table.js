import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import * as BS from 'react-bootstrap';
// import TableRow from './table_row'
import { fetchMembers, selectMember } from '../actions/index'



class Table extends Component {    
    componentDidMount() {
        this.props.fetchMembers()
    }

    handleClick(member) {        
        this.props.selectMember(member)
    }
    
    renderMembers = (member) => {        
        return (
            <tr 
                key={member.district}
                onClick={() => this.handleClick(member)}>
            <td>
                {member.first_name}
            </td>
            <td>
                {member.last_name}
            </td>
            <td>
                {member.district}
            </td>      
            </tr>
        )
    }
     
    render() {        
        const { members } = this.props
        return (
            <div>
                <h1>Select Your Council Member</h1>                
                    <BS.Table condensed bordered hover responsive>
                        <thead>
                            <tr>                            
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>District</th>
                            </tr>                    
                        </thead>
                        <tbody>
                            {members.map(this.renderMembers)}                                       
                        </tbody>
                    </BS.Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        members: state.members
    }    
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ selectMember}, dispatch)
// }

export default connect(mapStateToProps, { fetchMembers, selectMember })(Table);