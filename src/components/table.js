import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as BS from 'react-bootstrap';
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

    // determineClass(member) {        
    //     return this.state.activeMember && this.state.activeMember.id === member.id ? 'activeMember' : null 
    // }    
     
    render() {        
        const { members } = this.props        
        const data = members
        const columns = [
        {
            Header: 'First Name',
            accessor: 'first_name',            
        },
        {
            Header: 'Last Name',
            accessor: 'last_name',            
        },
        {
            Header: 'District',
            accessor: 'district',            
        },
        {
            Header: 'Ranking',
            accessor: 'rank_format',            
        },        
        ]
        return (
            <div>                                
                <div className='membertable'>
                    <ReactTable                
                    columns={columns}
                    data={data}
                    showPagination={false}
                    sortable={true}
                    defaultPageSize={14}                
                    defaultSorted={[{ 
                        id: 'rank_format', 
                        desc: true}
                    ]}                
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: e => { this.handleClick(rowInfo.original)},
                            className: this.state.activeMember && this.state.activeMember.id === rowInfo.original.id ? 'activeMember' : null                        
                            }
                        }
                    }
                    defaultSortMethod={(a,b) => {                    
                        if(typeof(a) === "string" && a.endsWith('%')) {                        
                            let newA = parseFloat(a.replace( /%/, "" ));
                            let newB = parseFloat(b.replace( /%/, "" ));
                            return ((newA < newB) ? 1 : ((newA > newB) ? -1 : 0));
                        } else {
                            return ((a < b) ? 1 : ((a > b) ? -1 : 0));   
                        }                     
                    }}
                    />
                </div>
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

export default connect(mapStateToProps, { fetchMembers, selectMember })(Table);