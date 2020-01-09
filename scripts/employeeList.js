import { useEmployee } from "./employeeDataProvider.js"
import { useComputers } from "./computerDataProvider.js"
import Employee from "./employee.js"
import { useDepartments } from "./departmentDataProvider.js"
import { useLocations } from "./locationsDataProvider.js"
import { useCustomers } from "./customerDataProvider.js"
import { useEmployeeCustomers } from "./employeeCustomerDataProvider.js"
const contentTarget = document.querySelector(".employees")



export const EmployeeList= ()=>{
const employees = useEmployee()
const computers = useComputers()
const departments = useDepartments()
const locations = useLocations()
const customers = useCustomers()
const customerRelationships = useEmployeeCustomers()



const render = ()=>{

  contentTarget.innerHTML = 
  `
  <button id="switchToCust">Switch to Customer</button>
  ${employees.map(employee =>{

    const computer = computers.find(model => model.id === employee.computerId)
    const department = departments.find(name => name.id === employee.departmentId)
    const location = locations.find(name => name.id === employee.locationId)

    let relatedCustomers = customerRelationships.filter(cr=>cr.employeeId === employee.id)
    relatedCustomers = relatedCustomers.map(ass=>{
      return customers.find(cust=>cust.id ===ass.customerId)
      
    })

    const html = Employee(employee, computer, department, location, relatedCustomers)
      return html
  }).join("")}
  `
  


}


render()

}