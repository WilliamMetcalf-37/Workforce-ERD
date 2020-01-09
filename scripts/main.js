import { getTheEmp, getTheCust } from "./SwitchView.js";


getTheEmp()

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent=>{
  if(clickEvent.target.id === "switchToCust"){
    getTheCust()
  }else if(clickEvent.target.id === "switchToEmp"){
    getTheEmp()
  }
})