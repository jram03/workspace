import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import items from "./../data/items.json";
import { useNavigate, useParams } from "react-router-dom";

type item = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};


export function Collection() {
  const navigate = useNavigate();
  const params = useParams();
  const { categories } = useShoppingCart();
  let l: item[] = []; // Initialize l as an empty array

  function navigater(i : string){
      navigate(`/store/${i}`)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            {categories.map((itemm) => {
              // Filter items by category and store the result in l
              l = items.filter((i: item) => i.category === itemm);
              l.length=3;
              return (
                <Col xs={12} md={3} key={itemm}>
                  <Card onClick={()=>navigater(itemm)}>
                    <Card.Header className="d-flex align-items-center" style={{height:'3.7rem',fontSize:'1rem'}}>{itemm}</Card.Header>
                    <Card.Body className="d-flex align-items-center justify-content-center" style={{height : '7rem'}}>
                        <Row className="d-flex flex.row">
                            {l.map((item) => (
                                 <Col key={item.id}><img style={{height:'2.4rem',width:'2.4rem',margin:'1px'}} src={item.image} height={40}/></Col>
                            
                            ))}
                            </Row>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Card.Body>
        <Card.Header></Card.Header>
      </Card>
    </>
  );
}
