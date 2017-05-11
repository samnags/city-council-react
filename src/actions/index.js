export function fetchMembers() {
    return async function(dispatch) {
        const url = `https://citycouncil-api.herokuapp.com/api/members`
        const response = await fetch(url)
        const members = await response.json()
        dispatch({type: 'FETCH_MEMBERS', payload: members })
        }
}


export function selectMember(member) {        
    return async function(dispatch) {
        const url = `https://citycouncil-api.herokuapp.com/api/members/${member.district}`
        const response = await fetch(url)
        const memberResponse = await response.json() 
        dispatch({type: 'MEMBER_SELECTED', payload: memberResponse})    
    }    
}