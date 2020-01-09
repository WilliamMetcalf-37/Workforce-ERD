const Employee = (employee, computer, department, location,customers) => {
  return `
      <section class="employee">
          <header>
          
              <h1>${employee.firstName} ${employee.lastName}</h1>
              <div>${employee.age} Years Old</div>
              <div> Works in the ${department.name} department</div>
              <div> Currently using a ${computer.year} ${computer.model}</div>
              <div> Works at the ${location.name} office</div>
          </header>
          <div>
          <ul>
              ${
                  customers.map(customer => `<li>${customer.name}</li>`).join("")
              }
          </ul>
      </div>
          
          
      </section>
  `
}

export default Employee