import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Cruditaient';

  public recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  public getRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      (response: Recipe[]) => {
        this.recipes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}