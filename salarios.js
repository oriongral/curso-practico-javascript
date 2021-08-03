const mexico = [];

mexico.push({ name: "Adán", salary: 1000 });
mexico.push({ name: "Omarf", salary: 960 });
mexico.push({ name: "Irving", salary: 500 });
mexico.push({ name: "Claudia", salary: 873 });
mexico.push({ name: "Fernando", salary: 1200 });
mexico.push({ name: "Alberto", salary: 1100 });
mexico.push({ name: "Tania", salary: 300 });
mexico.push({ name: "Elvis", salary: 700 });
mexico.push({ name: "Adán", salary: 1000 });
mexico.push({ name: "Guadalupe", salary: 780 });
mexico.push({ name: "Rocío", salary: 500 });
mexico.push({ name: "Emmanuel", salary: 964 });
mexico.push({ name: "Vicente", salary: 440 });
mexico.push({ name: "Joaquín", salary: 573 });
mexico.push({ name: "Rubén", salary: 900 });
mexico.push({ name: "Matusalén", salary: 1130 });
mexico.push({ name: "Raquel", salary: 670 });
mexico.push({ name: "Elvira", salary: 570 });
mexico.push({ name: "Alfredo", salary: 400 });
mexico.push({ name: "Gumercindo", salary: 678 });

const salaryMex = mexico.map(function (persona) {
  return persona.salary;
});

const salaryMexSorted = salaryMex.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

function isPeer(number) {
  return number % 2 === 0;
}

function calculateArithmeticMean(sortedList) {
  const addList = sortedList.reduce(function (accumulatedValue = 0, newItem) {
    return accumulatedValue + newItem;
  });
  const averageList = addList / sortedList.length;
  return averageList;
}

function medianSalary(list) {
  const half = parseInt(list.length / 2);
  if (isPeer(list.length)) {
    const listHalf1 = list[half - 1];
    const listHalf2 = list[half];
    const mean = calculateArithmeticMean([listHalf1, listHalf2]);
    return mean;
  } else {
    const listHalf = list(half);
    return listHalf;
  }
}

console.log(medianSalary(salaryMexSorted));
