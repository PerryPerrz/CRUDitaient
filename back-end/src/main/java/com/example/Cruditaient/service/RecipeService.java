package com.example.Cruditaient.service;

import com.example.Cruditaient.exception.RecipeNotFindException;
import com.example.Cruditaient.model.Recipe;
import com.example.Cruditaient.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {
    private final RecipeRepository recipeRepository;

    @Autowired
    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public Recipe addRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public List<Recipe> findAllRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe updateRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public Recipe findRecipeById(Long id) {
        return recipeRepository.findRecipeById(id).orElseThrow(() -> new RecipeNotFindException("Recipe by id " + id + " was not found"));
    }

    public void deleteRecipe(Long id) {
        recipeRepository.deleteRecipeById(id);
    }
}