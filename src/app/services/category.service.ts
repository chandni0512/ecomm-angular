import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(data:any){
    return this.http.post('http://localhost:3000/categories',data)
  }

  getCategories(id:string = ''){
    return this.http.get(`http://localhost:3000/categories/${id}`);
  }

  getCategoriesByType(type:string = ''){
    return this.http.get(`http://localhost:3000/categories?categoryType=${type}`);
  }


  getCategoriesByID(id:string = ''){
    return this.http.get(`http://localhost:3000/categories/${id}`);
  }

  deleteCategory(id:string){
    return this.http.delete(`http://localhost:3000/categories/${id}`)
  }
}
