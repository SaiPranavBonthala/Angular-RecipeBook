import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5),
    ];
    ingredientAdded = new EventEmitter<Ingredient[]>();
    
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice());
    }
}