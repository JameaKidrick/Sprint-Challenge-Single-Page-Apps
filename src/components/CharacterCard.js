import React from "react";
import { Container, Card, CardTitle } from 'reactstrap';

export default function CharacterCard(props) {
  return(
    <Container>
      <Card color='success' className='cardContainer' key={props.id}>
        <CardTitle>{props.name}</CardTitle>
      </Card>
    </Container>
  )
}
