import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 100px;
  height: 30px;
  border: 1px solid;
`
const Box = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid;
  ${(props) => {
    console.log(props)
    return `background-color : ${props.color}`
  }}
`
const BoxMaker = () => {
  const [color, setColor] = useState('#fff')
  const handleColor = (event) => {
    setColor(event.target.value)
  }
  return (
    <>
      <Input onChange={handleColor} />
      <Box>Box1</Box>
    </>
  )
}

export default BoxMaker
