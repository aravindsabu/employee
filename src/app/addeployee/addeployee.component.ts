import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addeployee',
  templateUrl: './addeployee.component.html',
  styleUrls: ['./addeployee.component.css']
})
export class AddeployeeComponent implements OnInit {

  constructor() { }
  employeecode=""
  name=""
  desigination=""
  gender=""
  company=""
  salary=""
  address=""
  number=""
  email=""
  experience=""
  blood=""
  birth=""

  readValues=()=>{
    let data={
      " employeecode":this. employeecode,
      " name":this.name,
      "desigination":this.desigination,
      "gender":this.gender,
      "company":this.company,
      "salary":this.salary,
      "address":this.address,
      "number":this.number,
      "email":this.email,
      "experience":this.experience,
      "blood":this.blood,
      "birth":this.birth
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
