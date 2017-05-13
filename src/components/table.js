import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import * as BS from 'react-bootstrap';
// import TableRow from './table_row'
import { fetchMembers, selectMember } from '../actions/index'



class Table extends Component {
    constructor(props) {
        super(props)

        this.state = { selectedRowId: 0 }
    }

    componentDidMount() {
        this.props.fetchMembers()
    }

    handleClick(member) {        
        this.props.selectMember(member)        
        this.setState({selectedRowId: member.id})
    }

    // isActive() {        
    //     debugger
    //     // this.props.activeMember.key === member.key ? 'active' : null 
    // }

    // {this.state.active ? 'active' : null}
    // {this.key === member.district ? 'active' : null}
    
    renderMembers = (member) => {                
        const activeMember = this.props.activeMember ? this.props.activeMember.key : 1 
        return (            
            <tr   
                // style={member.id === this.state.selectedRowId ? 'background-color: #F00' : ''}              
                // style={{backgroundColor: this.state.bgColor}}              
                className={member.id === this.state.selectedRowId ? 'active' : ''}
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
        members: state.members,
        activeMember: state.activeMember
    }    
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ selectMember}, dispatch)
// }

export default connect(mapStateToProps, { fetchMembers, selectMember })(Table);