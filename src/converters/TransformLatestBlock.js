import NumberWithCommas from "./NumberWithCommas"

function TransformLatestBlock(data) {

    //console.log(data);

    return NumberWithCommas(parseInt(data.result))
}

export default TransformLatestBlock;