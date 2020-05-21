import React from 'react'

export default props => {
    if(props.test) {
        return props.children // retorna o objeto que esta dentro da tag

    } else {
        return false
    }
}