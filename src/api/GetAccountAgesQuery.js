export const myQuery = `
with
  latest_txs as (
    select
      max(block_timestamp) as max_timestamp,
      from_address
    from
      optimism.core.fact_transactions
    group by
      2
  ),
  time_diff as (
    select
      datediff('day', max_timestamp, CURRENT_TIMESTAMP) as account_age,
      from_address
    from
      latest_txs
  )
select
  count_if(account_age < 2) as "1 day old",
  count_if(
    account_age >= 2
    and account_age < 7
  ) as "1 week old",
  count_if(
    account_age >= 7
    and account_age < 30
  ) as "1 month old",
  count_if(
    account_age >= 30
    and account_age < 365
  ) as "1 year old",
  count_if(account_age >= 365) as "others"
from
  time_diff
`