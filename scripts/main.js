import { getEmployee } from "./employeeDataProvider.js";
import { getComputers } from "./computerDataProvider.js";
import { EmployeeList } from "./employeeList.js";
import { getDepartments } from "./departmentDataProvider.js";
import { getLocations } from "./locationsDataProvider.js";

getEmployee()
.then(getComputers)
.then(getDepartments)
.then(getLocations)
.then(EmployeeList)