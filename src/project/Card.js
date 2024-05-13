
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";

function Card(props){

    return(
        <Col className="card">
        <img  src={process.env.PUBLIC_URL+props.src} width="100%" />
        <p></p>
        <h4>{props.title}</h4>
        <p style={{fontSize:'13px', color:'grey'}}>{props.content}</p>
        <p>{props.price}원</p>
        <button>담기</button>
        </Col>
    )
}
export default Card;