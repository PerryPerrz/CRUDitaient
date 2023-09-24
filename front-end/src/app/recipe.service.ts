import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public getRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${this.apiUrl}/recipe/all`);
    }

    public addRecipe(recipe: Recipe): Observable<Recipe> {
        return this.http.post<Recipe>(`${this.apiUrl}/recipe/add`, recipe);
    }

    public updateRecipe(recipe: Recipe): Observable<Recipe> {
        return this.http.put<Recipe>(`${this.apiUrl}/recipe/update`, recipe);
    }

    public deleteRecipe(recipeId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/recipe/delete/${recipeId}`);
    }
}