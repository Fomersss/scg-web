
export const findValue = async (req, res) => {
  const input = ['X', 5, 9, 15, 23, 'Y', 'Z'];
  //series function
  const series = (index) => 2 * (index + 1)
  let valueSeries = [];
  let result = {};
  input.map((i, index) => {
    if (index === 0) {
      valueSeries.push(input[index + 1] - series(index))
    } else {
      valueSeries.push(valueSeries[index - 1] + series(index - 1))
    }
  })
  input.forEach((i, index) => {
    if (typeof i === 'string') {
      result[input[index]] = valueSeries[index]
    }
  });
  // show result
  console.log(result)
};