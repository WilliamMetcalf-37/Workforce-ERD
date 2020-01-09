const Customer = (customer, employees) => {
  return `
      <section class="employee">
          <header>
              ${customer.name}
              <ul>
              ${employees.map(emp => `<li>${emp.firstName}</li>`).join("")}
              </ul>
          </header>
         
      </section>`
  
}




export default Customer