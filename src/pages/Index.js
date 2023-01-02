import { myQuery as GetOpPriceQuery } from "../api/GetOpPriceQuery";
import { Row, Col, Container, Card } from "reactstrap";
import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";

export default function Index() {
  return (
    <Container className="pb-1">
      <Row className="pb-2">
        <Card className="bg-red-900 text-white">
          <Col className='h1'>Summary</Col>
        </Card>
      </Row>
      <Row className="pb-2">
          <GenerateChart
            chartQuery={GetOpPriceQuery}
            chartType="LineBarChart"
            chartTitle="Op Price"
            chartFlipYData={true}
            chartYAxisLabel={["Average Op Price","Weekly Price"]}
            chartBackgroundColors={[CHARTCOLORS.BLACK, CHARTCOLORS.COLOR1]}
          ></GenerateChart>
      </Row>
    </Container>
  );
}
