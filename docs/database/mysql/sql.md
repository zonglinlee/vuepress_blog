---
title: basic sql
---
order results by enum fields, `field` is a mysql function.
```sql
SELECT orderNumber,  status FROM orders 
ORDER BY 
  FIELD(
    status, 
    'In Process', 
    'On Hold', 
    'Cancelled', 
    'Resolved', 
    'Disputed', 
    'Shipped'
  );
```