import { getEmployee } from "./employeeDataProvider.js";
import { getComputers } from "./computerDataProvider.js";
import { EmployeeList } from "./employeeList.js";
import { getDepartments } from "./departmentDataProvider.js";
import { getLocations } from "./locationsDataProvider.js";
import { getEmployeeCustomers } from "./employeeCustomerDataProvider.js";
import { getCustomers } from "./customerDataProvider.js";
import { CustomerList } from "./customerList.js";


export const getTheEmp=()=>{
  getEmployee()
.then(getComputers)
.then(getDepartments)
.then(getLocations)
.then(getCustomers)
.then(getEmployeeCustomers)
.then(EmployeeList)
}

export const getTheCust=()=>{
  getEmployee()
  .then(getComputers)
  .then(getDepartments)
  .then(getLocations)
  .then(getCustomers)
  .then(getEmployeeCustomers)
  .then(CustomerList)
}
