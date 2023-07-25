import {  Row } from "react-bootstrap";
import { Collection } from "../components/Collection";
import { Banner } from "../components/Banner";

export function Home(){

    return <>
    <Row>
        <Banner />
        <Collection />
    </Row>
    </>
}