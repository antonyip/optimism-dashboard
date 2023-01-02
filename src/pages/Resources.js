import { useRef } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardLink,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";

function SmallCard({ title, text, link, img, shortname }) {
  const _blank = useRef("_blank");
  return (
    <Card className="bg-red-100">
      <CardBody>
        <CardTitle className="h3">{title}</CardTitle>
      </CardBody>
      <CardBody className="">
        <CardText className="p-2">
          <img className="justify-self-center" alt="" src={img} />
        </CardText>
        <CardText className="p-2">{text}</CardText>
        <CardText className="p-2">
          <CardLink
            className="text-blue-600 rounded border-black border-2 p-2"
            href={link}
            target={_blank}
          >
            {shortname || link}
          </CardLink>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default function Resources() {
  return (
    <Container className="pb-1">
      <Row className="pb-2">
        <Card className="bg-red-900 text-white">
          <Col className="h1 text-white">Resources</Col>
        </Card>
      </Row>
      <Row className="pb-2">
        <Col>
          <SmallCard
            title={"Optimism"}
            text={"Main Page"}
            img={"./img/optimism-ethereum-op-logo.png"}
            link={"https://www.optimism.io"}
          ></SmallCard>
        </Col>
        <Col>
          <SmallCard
            title={"DefilLama"}
            text={"The place to look for TVL"}
            img={"https://cdn.publish0x.com/prod/fs/images/300e36ef13a257666b031d5da7012b565a0a1c55033becbdbf690ebcf21eb121.png"}
            link={"https://defillama.com/chain/Optimism"}
          ></SmallCard>
        </Col>
        <Col>
          <SmallCard
            title={"Etherscan - Optimism"}
            text={"Etherscan for Optimism"}
            img="https://etherscan.io/images/brandassets/etherscan-logo-circle.png"
            link={"https://optimistic.etherscan.io"}
          ></SmallCard>
        </Col>
      </Row>
      <Row className="pb-2">
        <Col>
          <SmallCard
            title={"Sushi vs Velodrome"}
            text={"by jackguy"}
            shortname={"Dashboard"}
            link={"https://app.flipsidecrypto.com/dashboard/sushiswap-vs-velodrome-gludfi"}
          ></SmallCard>
        </Col>
        <Col>
          <SmallCard
            title={"Overtime Markets"}
            text={"by CryptoIcicle"}
            shortname={"Dashboard"}
            link={"https://app.flipsidecrypto.com/dashboard/VTZBi8"}
          ></SmallCard>
        </Col>
        <Col>
          <SmallCard
            title={"OPtimitic or Pessimistic?"}
            text={"by Moe"}
            shortname={"Dashboard"}
            link={"https://app.flipsidecrypto.com/dashboard/untitled-board-Kj30DH"}
          ></SmallCard>
        </Col>
      </Row>
      <Row className="pb-2">
        <Col>
          <SmallCard
            title={"OP Megadash "}
            text={"by sina"}
            link={"https://opmega.vercel.app"}
          ></SmallCard>
        </Col>
        {/* <Col>
          <SmallCard
            title={"Overtime Markets"}
            text={"by CryptoIcicle"}
            shortname={"Dashboard"}
            link={"https://app.flipsidecrypto.com/dashboard/VTZBi8"}
          ></SmallCard>
        </Col>
        <Col>
          <SmallCard
            title={"OPtimitic or Pessimistic?"}
            text={"by Moe"}
            shortname={"Dashboard"}
            link={"https://app.flipsidecrypto.com/dashboard/untitled-board-Kj30DH"}
          ></SmallCard>
        </Col> */}
      </Row>

      
    </Container>
  );
}
