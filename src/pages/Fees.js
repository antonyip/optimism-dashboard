import { myQuery as GetBlocksWeeklyQuery } from "../api/GetBlocksWeeklyQuery";
import { myQuery as GetTransactionsWeeklyQuery } from "../api/GetTransactionsWeeklyQuery";
import { Row, Col, Container, Card } from "reactstrap";
import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";

export default function Fees() {
  return (
    <Container>
      <Row className="pb-2">
        <Card className="bg-red-900 text-white">
          <Col className="h1 text-white">Fees</Col>
        </Card>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <GenerateChart
            chartQuery={GetBlocksWeeklyQuery}
            chartType="TimeBarChart"
            chartTitle="Blocks Per Week"
            //chartYAxisLabel=[""]
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
        <Col xs={12} md={6}>
          <GenerateChart
            chartQuery={GetTransactionsWeeklyQuery}
            chartType="TimeBarChart"
            chartTitle="Transactions Per Week"
            //chartYAxisLabel=[""]
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
    </Container>
  );
}
