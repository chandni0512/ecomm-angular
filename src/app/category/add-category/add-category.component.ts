import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  protected sellerDetails:any;
  protected editId:string;
  protected addCategoryForm;
  protected ifFormSubmitted:boolean = false;
  protected categoryAddMsg :string = '';
  protected categories:any;
  protected selectedType:string;
  constructor (private categoryService:CategoryService,private route:ActivatedRoute){
   
    this.addCategoryForm = new FormGroup({
      categoryType: new FormControl('', [Validators.required]),
      category: new FormControl(''),
      categoryName: new FormControl('', [Validators.required,Validators.minLength(5)]),
    });
    route.url.subscribe((url: UrlSegment[])=> {
      if(url[0].path == 'add-subCategory'){
       this.selectedType = 'sub-category';
       this.categoryService.getCategoriesByType('category').subscribe((res:any)=>{        
        this.categories = res;
        this.addCategoryForm.patchValue({
          categoryType : 'sub-category'
        })
        this.addCategoryForm.get('category')?.addValidators(Validators.required);
      })
      }
     })
  }

  ngOnInit() {
    this.sellerDetails = document.defaultView?.localStorage.getItem('logedSeller');        
    this.route.params.subscribe(params => {
      this.editId = params['id']; //log the value of id
      if(this.editId){
        this.getCategoryDetails()
      }
    });
  }

  protected onTypeSelect(event:any){
    this.selectedType = event?.target?.value;
    if(this.selectedType == 'sub-category'){
      this.categoryService.getCategoriesByType('category').subscribe((res:any)=>{        
        this.categories = res;
        this.addCategoryForm.get('category')?.addValidators(Validators.required);
      })
    }
  }

  protected getCategoryDetails(){
    this.categoryService.getCategoriesByID(this.editId).subscribe((res:any)=>{
      if(res){
        this.addCategoryForm.patchValue({
          categoryName:res.categoryName,
        })
      }
    })
  }

  protected addProduct() :void{  
    this.ifFormSubmitted = true;
    console.log(this.addCategoryForm);
    
    if(this.addCategoryForm.valid){
    let val:any = this.addCategoryForm.value;    
    val.sellerId= (JSON.parse(this.sellerDetails)).id;
      this.categoryService.addCategory(val).subscribe((res:any)=>{
        if(res){
          this.categoryAddMsg = 'Category added successfully';
          setTimeout(()=>{
            this.categoryAddMsg = '';
          },2000)
          this.ifFormSubmitted = false;
          this.addCategoryForm.reset();
        }
      })
    }
   
   }

}
