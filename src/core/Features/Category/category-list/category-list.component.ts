import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../Services/category.service';
import { Category } from '../Models/Category';
import { RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  categories? : Category[];


  constructor(private categoriService : CategoryService) { }

  ngOnInit(): void {
    this.categoriService.getAllCategories()
      .subscribe({
        next: (response: Category[]) => {
          this.categories = response;
        }
      });
  }
}