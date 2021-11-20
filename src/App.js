import React, { useState } from "react";
import styled from "styled-components";
const tableColor = "lightblue";

const App = () => {
  const [footerColor, setFooterColor] = useState("yellow");
  return (
    <>
      <Header>
        <ItemMenu
          onClick={() => window.open("https://www.google.com", "__blank")}
        >
          Exemplo
        </ItemMenu>
      </Header>
      <Body>
        <h1>Teste</h1>
        <span>Teste</span>
        <Paragraphy>
          Aenean cursus libero dolor, at posuere elit ultrices a. In hac
          habitasse platea dictumst. Morbi convallis, quam porttitor interdum
          pellentesque, justo tortor egestas diam, vitae vehicula ligula ipsum
          ut ex. Aenean rhoncus ante risus, vitae iaculis est fringilla eu. Duis
          accumsan malesuada ex, vel ullamcorper eros sodales vel. Nullam
          suscipit massa quis mi <b>cursus</b> viverra. In hac habitasse platea
          dictumst. Mauris accumsan, tellus eget convallis viverra, tortor diam
          accumsan arcu, sit amet malesuada dui augue at justo. Pellentesque
          imperdiet sem dolor, ultrices <small>consectetur</small> mi malesuada
          a. Suspendisse laoreet sapien nec tortor semper posuere.
        </Paragraphy>
        <TableComponent>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </TableComponent>
        <SaveButton onClick={() => setFooterColor("black")}>Salvar</SaveButton>
        <CancelButton onClick={() => setFooterColor("yellow")}>
          Cancelar
        </CancelButton>
      </Body>
      <Footer BackgroundProp={footerColor} />
    </>
  );
};

/*
  ESTRUTURA BÁSICA DO COMPONENTE

  import styled from 'styled-components';

  const NomeDoComponente = styled.taghtml`
    código: css
  `;

*/

const Header = styled.div`
  height: 50px;
  background-color: coral;
  text-align: right;
`;

const ItemMenu = styled.span`
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const Body = styled.div`
  margin: 50px;
`;

const Paragraphy = styled.p`
  text-indent: 7%;
`;

const TableComponent = styled.table`
  margin-top: 40px;
  background-color: ${tableColor};
  text-align: center;
  border: 1px dotted red;

  th {
    color: red;
  }

  :hover {
    background-color: aquamarine;
  }

  @media (max-width: 800px) {
    color: yellow;
  }
`;

const SaveButton = styled.button`
  margin: 30px;
  height: 50px;
  width: 100px;
  border-radius: 100px;
  cursor: pointer;
  background-color: green;
`;

const CancelButton = styled(SaveButton)`
  background-color: red;
`;

const Footer = styled.footer`
  background: ${(props) => props.BackgroundProp};
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default App;
