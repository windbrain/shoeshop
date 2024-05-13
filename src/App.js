import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./project/Card.js";
import data from "./project/data.js";
import { useState } from "react";

function App() {
  let [shoes] = useState(data);
  let src1 = "/shoes";
  let src2 = ".png";

  // 상품목록 출력을 반복문으로 만들기위해 shoes배열의 반절인 배열을 만듦
  const subArray = shoes.slice(0, Math.floor(shoes.length / 2));
  let i = 0;


  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav style={{ display: "flex", justifyContent: "flex-end" }}>
            <img src={process.env.PUBLIC_URL + "/cart.png"} width="10%" />
          </Nav>
        </Container>
      </Navbar>
      <p></p> {/* 그냥 한칸 띄우기 */}
      <h1 style={{ fontWeight: "bold" }}>신발 상품 목록</h1>
      <p>현재 6개의 상품이 있습니다.</p>
      <Container>
        {subArray.map(() => {
          return (
            <Row>
              {[1, 2].map(() => {
                  if (i < shoes.length) {
                return (
                  <Col>
                    <Card
                      src={src1 + (i + 1) + src2}
                      title={shoes[i].title}
                      content={shoes[i].content}
                      price={shoes[i].price}
                    />

                    {/* 모르겠어서 우선 글씨 흰색으로 숨김 */}
          <p style={{color:'white'}}>{i++}</p>
                  </Col>
                 
          
                );
              }
              })}
             
            </Row>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
