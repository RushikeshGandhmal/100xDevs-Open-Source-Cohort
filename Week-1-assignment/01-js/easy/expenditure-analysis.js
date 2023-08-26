/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const res = [];
  const key = {};

  for (const obj of transactions) {
    const { category } = obj;
    if (key[category] === undefined) {
      key[category] = { category: category, totalSpent: obj.price };
      res.push(key[category]);
    } else {
      key[category].totalSpent += obj.price;
    }
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
