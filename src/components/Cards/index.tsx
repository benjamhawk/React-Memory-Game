import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: grid;
  grid-column: 2/3;
  grid-row: 2/3;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 160px);
  height: 100%;
  width: 100%;
  padding-top: 30px;
`

const Card = styled.div`
  align-self: center;
  justify-self: center;
  background-color: ${props => props.theme.cardColor};
  border-radius: 50%;
  width: 130px;
  height: 130px;
`

export function Cards () {
  return (
    <CardContainer>
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 
    </CardContainer>
  )
}
