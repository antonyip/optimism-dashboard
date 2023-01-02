export const myQuery = `
select
  date_trunc('week', block_timestamp)::date as day_date,
  count(1) as num_txs
from
  optimism.core.fact_transactions
group by
  1
order by
  1
`