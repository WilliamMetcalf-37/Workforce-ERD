import { useEmployee } from "./employeeDataProvider.js"
import { useComputers } from "./computerDataProvider.js"
import Customer from "./Customer.js"
import { useDepartments } from "./departmentDataProvider.js"
import { useLocations } from "./locationsDataProvider.js"
import { useCustomers } from "./customerDataProvider.js"
import { useEmployeeCustomers } from "./employeeCustomerDataProvider.js"
const contentTarget = document.querySelector(".employees")



export const CustomerList= ()=>{
const employees = useEmployee()
const computers = useComputers()
const departments = useDepartments()
const locations = useLocations()
const customers = useCustomers()
const customerRelationships = useEmployeeCustomers()








const render = ()=>{


  contentTarget.innerHTML = `
  <button id="switchToEmp">Switch to Employee</button>
  ${customers.map(cust =>{

    let relatedEmployees = customerRelationships.filter(cr=>{return cr.customerId === cust.id})
  
        let realEmp = relatedEmployees.map(ass=>{
          return employees.find(emp=>emp.id === ass.employeeId)
        })

      const html = Customer(cust, realEmp) 
      return html  
    }).join("")

  }`


}

  


render()

}