import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from "../../components/nav"
import styled from 'styled-components'

function Detail() {
    const { detailId } = useParams() 

    return (
        <Wrap className='container'>
            <Nav currentMenu={'works'}/>

            {detailId}
        </Wrap>
    )
}

const Wrap = styled.div`
	background: #e2e2e2;
	padding: 50px;
	width: calc(100% - 100px);
	height: calc(100vh - 100px);
	color: #222;
	letter-spacing: -1px;
	line-height: 1.1;
	font-weight: 900;
`

export default Detail
