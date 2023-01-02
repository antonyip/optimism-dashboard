export const myQuery = `
select
  date_trunc('week', hour)::date as day_date,
  avg(price) as weekly_price,
  avg(weekly_price) over (order by day_date) as avg_price
from
  optimism.core.fact_hourly_token_prices
where
  symbol = 'OP'
group by
  1
order by
  1
`