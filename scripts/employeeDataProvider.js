let employee = []

export const useEmployee = () => employee.slice()

export const getEmployee = () => fetch("http://localhost:3000/employees")
    .then(res => res.json())
    .then(parsedEmployee => employee = parsedEmployee)