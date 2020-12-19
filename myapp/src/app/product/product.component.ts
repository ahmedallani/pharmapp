import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/products.service'
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
cat :any=[]
myArray:any=[]
myProduct:any={
  id:"",
  name:"",
  price:"",
  discount:"",
  PricewithDiscount:"",
  DoesInMG:"",
  image:"",
  categoryid:'',
  description:"",
}
myCondition=false
  constructor(private myVar:ProductService) { }

  ngOnInit():void {
    this.getProduct()
    this.getCategories()
  }
  //CRUD
  getProduct(){
    this.myVar.getAll()
    .subscribe(data => {
      console.log(data)
      this.myArray=data;
    })
  }
 //Methode Delete 
 deleteProduct(id:number){
  console.log(id)

   this.myVar.delete(id)

   .subscribe(()=>{
    // return this.myArray=this.myArray.filter((item:any)=>item.id !== id)
    return this.getProduct()
   })
 }

// Methode post
postProduct(){
  this.myVar.postitem(this.myProduct)
  .subscribe((item:any)=>{
    this.myArray=[item, ...this.myArray]
    this.videInput();
  })
}
//vide inputs

videInput(){
  this.myProduct={
    id:'',
    name:'',
    price:'',
    discount:'',
    PricewithDiscount:'',
    DoesInMG:'',
    quantity:'',
    image:'',
    categoryid:'',
    description:'',
  }
}
// update 
editProduct(item:any){
  this.myProduct=item;
  this.myCondition=true;
}

// update 
updatemyProduct(){
  this.myVar.updateProduct(this.myProduct)
  .subscribe(product=>{
    this.videInput();
    this.myCondition=false;
    this.getProduct()
  })
}
getCategories(){
  this.myVar.getcat().subscribe(result => {
      this.cat=result
      if(this.cat.length){
        this.myProduct.categoryid=this.cat[0].id
      }
    
  })
}
// OnselectImage(){
//   this.myProduct.image=event.target.files[0]
// }
}

