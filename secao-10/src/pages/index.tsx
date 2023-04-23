import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: red;
  width: 200px;
  height: 200px;
`;

export default function Home() {
  return (
    <div>
      Hello world! <Button>Teste</Button>
    </div>
  );
}
