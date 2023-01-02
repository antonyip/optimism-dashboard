import { Row, Col, Container, Card } from "reactstrap";

import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";

import { myQuery as GetOpPriceQuery } from "../api/GetOpPriceQuery";
import { myQuery as GetOPL1SubmissionsQuery } from "../api/GetOPL1SubmissionsQuery";

import GenerateSingleDigitDisplay from "../components/GenerateSingleDigitDisplay";
import TransformCoinGeckoPrice from "../converters/TransformCoinGeckoPrice";
import TransformLatestBlock from "../converters/TransformLatestBlock";

export default function Index() {
  return (
    <Container className="pb-1">
      <Row className="pb-2">
        <Card className="bg-red-900 text-white">
          <Col className="h1">Summary</Col>
        </Card>
      </Row>
      <Row className="pb-2">
        <Col xs={12} md={6}>
          <GenerateSingleDigitDisplay
            chartSource="https://api.coingecko.com/api/v3/coins/optimism?tickers=true&market_data=true&sparkline=true"
            chartDataTransformer={TransformCoinGeckoPrice}
            chartTitle={"Op Price"}
            chartPreValueText={"$"}
            chartToDisplaySource={true}
          ></GenerateSingleDigitDisplay>
        </Col>
        <Col xs={12} md={6}>
          <GenerateSingleDigitDisplay
            chartSource="https://powerful-indulgent-night.optimism.discover.quiknode.pro/49f2256db16cf52224e9488a33bdc5f2adf7c05d/"
            chartSourceParams={{
              method: "eth_blockNumber",
              params: [],
              id: 1,
              jsonrpc: "2.0",
            }}
            chartAxiosGetter="POST"
            chartDataTransformer={TransformLatestBlock}
            chartTitle={"Op Latest Block"}
            chartPreValueText={""}
            chartToDisplaySource={true}
          ></GenerateSingleDigitDisplay>
        </Col>
      </Row>
      <Row className="pb-2">
        <Col xs={12} md={6}>
          <GenerateChart
            chartQuery={GetOpPriceQuery}
            chartType="LineBarChart"
            chartTitle="Op Price"
            chartFlipYData={true}
            chartYAxisLabel={["Average Op Price", "Weekly Price"]}
            chartBackgroundColors={[CHARTCOLORS.BLACK, CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
        <Col xs={12} md={6}>
          <GenerateChart
            chartQuery={GetOPL1SubmissionsQuery}
            chartType="TimeBarChart"
            chartTitle="Op Weekly L1 Submissions"
            //chartYAxisLabel={["Weekly Submissions"]}
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
    </Container>
  );
}
