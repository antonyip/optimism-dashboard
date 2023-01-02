import { myQuery as GetWeeklyNewSenderQuery } from "../api/GetWeeklyNewSenderQuery";
import { Row, Col, Container, Card } from "reactstrap";
import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";

export default function Users() {
  return (
    <Container>
      <Row className="pb-2">
        <Card className="bg-red-900 text-white">
          <Col className="h1 text-white">User</Col>
        </Card>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <GenerateChart
            chartQuery={GetWeeklyNewSenderQuery}
            chartType="MultiAxisLineBarChart"
            chartTitle="Total/New Senders Per Week"
            chartFlipYData={true}
            chartYAxisLabel={["Total Senders", "New Senders Per Week"]}
            chartBackgroundColors={[CHARTCOLORS.BLACK, CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
    </Container>
  );
}
