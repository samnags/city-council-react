import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import * as BS from 'react-bootstrap';
// import TableRow from './table_row'
import { fetchMembers, selectMember } from '../actions/index'
import ReactTable from 'react-table'
import 'react-table/react-table.css'



class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeMember: null
        }
    }    
    componentDidMount() {
        this.props.fetchMembers()
    }

    handleClick(member) {        
        this.setState({
            activeMember: member
        })
        this.props.selectMember(member)        
    }

    determineClass(member) {
        debugger
        return this.state.activeMember && this.state.activeMember.id === member.id ? 'activeMember' : null 
    }
    
    // renderMembers = (member) => {        
    //     return (
    //         <tr 
    //             key={member.district}
    //             onClick={() => this.handleClick(member)}
    //             className={this.determineClass(member)}
    //         >
    //         <td>
    //             {member.first_name}
    //         </td>
    //         <td>
    //             {member.last_name}
    //         </td>
    //         <td>
    //             {member.district}
    //         </td>      
    //         <td>
    //             {member.rank}
    //         </td>      
    //         </tr>
    //     )
    // }
     
    render() {        
        const { members } = this.props        
        const data = members
        const columns = [
        {
            Header: 'First Name',
            accessor: 'first_name'
        },
        {
            Header: 'Last Name',
            accessor: 'last_name'
        },
        {
            Header: 'District',
            accessor: 'district'
        },
        {
            Header: 'Ranking',
            accessor: 'rank'
        }
        ]
        return (
            <div>
                <h1>Select Your Council Member</h1>                
                <ReactTable
                columns={columns}
                data={data}
                showPagination={false}
                sortable={true}
                defaultPageSize={14}                
                getTdProps={(state, rowInfo, column, instance) => {
                    return {
                        onClick: e => { this.handleClick(rowInfo.original)},
                        className: this.state.activeMember && this.state.activeMember.id === rowInfo.original.id ? 'activeMember' : null                        
                        }
                    }
                }
                />
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

// <BS.Table condensed bordered responsive>
//                         <thead>
//                             <tr>                            
//                                 <th>First Name</th>
//                                 <th>Last Name</th>
//                                 <th>District</th>
//                                 <th>Ranking</th>
//                             </tr>                    
//                         </thead>
//                         <tbody>
//                             {members.map(this.renderMembers)}                                       
//                         </tbody>
//                     </BS.Table>