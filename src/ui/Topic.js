import React from 'react'
import styled, { css } from 'styled-components'

function Topic() {
    const Button = styled.button`
                    background: transparent;
                    border-radius:${props => props.border ? '12px': '5px'};
                    border: 2px solid palevioletred;
                    color: palevioletred;
                    margin: 0.5em 1em;
                    padding: 0.25em 1em;
                    ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}`;
    const Container = styled.div`
                    text-align: center;
                  `
                  const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
    return (
        <div>
            Topics Page
            <Container>
            <Button border>Normal Button</Button>
            <Button primary>Primary Button</Button>
            <TomatoButton>Tomato</TomatoButton>
        </Container>
        </div>
    )
}

export default Topic
