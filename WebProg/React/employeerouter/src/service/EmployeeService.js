class EmployeeService {

    constructor(){
        this.earr=[{empid:1,ename:"Janbhai",sal:5000},
        {empid:2,ename:"Anmol",sal:7000},
        {empid:3,ename:"Laxmikant",sal:3000}]
    }

    getEmployee(){
        return this.earr;
    }

    addEmp(emp){
        let pos=this.earr.findIndex(a=>a.empid===emp.empid)
        if(pos===-1)
        {
            this.earr.push(emp)
            console.log(this.earr)
        }
    }
}

export default new EmployeeService();