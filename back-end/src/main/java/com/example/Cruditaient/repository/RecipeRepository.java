package com.example.Cruditaient.repository;

import com.example.Cruditaient.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    void deleteRecipeById(Long id);
    Optional<Recipe> findRecipeById(Long id);
}
