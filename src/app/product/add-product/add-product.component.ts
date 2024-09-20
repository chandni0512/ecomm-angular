import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { productData } from '../../data-interface/sellerData';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  protected sellerDetails:any;
  protected editId:string;
  protected addProductForm;
  protected ifFormSubmitted:boolean = false;
  protected productAddMsg :string = '';
  protected categories:any ;
  constructor (private productService:ProductService,private categoryService:CategoryService,private route:ActivatedRoute){
    this.addProductForm = new FormGroup({
      productName: new FormControl('', [Validators.required,Validators.minLength(8)]),
      description: new FormControl('', [Validators.required,Validators.minLength(20)]),
      price: new FormControl('', [Validators.required,Validators.minLength(2)]),
      category: new FormControl('', [Validators.required]),
      imageURL: new FormControl('', [Validators.required,Validators.minLength(10)]),
    });
  }

  ngOnInit() {
    this.sellerDetails = document.defaultView?.localStorage.getItem('logedSeller');   
    this.getCotegories();     
    this.route.params.subscribe(params => {
      this.editId = params['id']; //log the value of id
      if(this.editId){
        this.getProductDetails()
      }
    });
  }

  protected getCotegories(){
    this.categoryService.getCategories().subscribe((res:any)=>{
      this.categories =res;
      
    })
  }

  protected getProductDetails(){
    this.productService.getProducts(this.editId).subscribe((res:any)=>{
      if(res){
        this.addProductForm.patchValue({
          productName:res.productName,
          description:res.description,
          price:res.price,
          category:res.category,
          imageURL:res.imageURL
        })
      }
    })
  }
  protected addProduct() :void{  
    this.ifFormSubmitted = true;
    if(this.addProductForm.valid){
    let val:any = this.addProductForm.value;    
    val.sellerId= (JSON.parse(this.sellerDetails)).id;
      this.productService.addProduct(val).subscribe((res:any)=>{
        if(res){
          this.productAddMsg = 'Product added successfully';
          setTimeout(()=>{
            this.productAddMsg = '';
          },2000)
          this.ifFormSubmitted = false;
          this.addProductForm.reset();
        }
      })
    }
   
   }

}
