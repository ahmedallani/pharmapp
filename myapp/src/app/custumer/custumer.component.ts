import { Component, OnInit } from '@angular/core';
import {CustumerService} from '../services/custumer.service'
@Component({
  selector: 'app-custumer',
  templateUrl: './custumer.component.html',
  styleUrls: ['./custumer.component.scss']
})
export class CustumerComponent implements OnInit {
myArray:any=[]
myCustumer:any={
  id:'',
  name:'',
  genre:'',
  date:'',
  phone:'',
  email:'',
  points:''
}
  constructor(private myVar:CustumerService) { }

  ngOnInit():void {
    this.getCustumer()
  }
  //CRUD
  getCustumer(){
    this.myVar.getAll()
    .subscribe(data => {
      console.log(data)
      this.myArray=data;
    })
  }
 //Methode Delete 
 deleteCustumer(id:number){
  console.log(id)

   this.myVar.delete(id)

   .subscribe(()=>{
    // return this.myArray=this.myArray.filter((item:any)=>item.id !== id)
    return this.getCustumer()
   })
 }

// Methode post
postCustumer(){
  this.myVar.postitem(this.myCustumer)
  .subscribe((item:any)=>{
    this.myArray=[item, ...this.myArray]
  })
}

}
