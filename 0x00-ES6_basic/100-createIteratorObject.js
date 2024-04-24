export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const employees = departments.flat();

  let currentIndex = 0;

  return {
    next() {
      const value = currentIndex < employees.length ? employees[currentIndex] : undefined;
      currentIndex += 1;
      return { value, done: value === undefined };
    },
  };
}
