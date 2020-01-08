const Employee = (employee, computer, department, location) => {
  return `
      <section class="employee">
          <header>
              <h2>${employee.firstName} ${employee.lastName}</h2>
              <p>${employee.age} Years Old</p>
              <p>Department: ${department.name}</p>
              <p> Works in ${location.name}</p>
          </header>
          <div>
          Computer: ${computer.model} Year: ${computer.year}
          </div>
          
      </section>
  `
}

export default Employee