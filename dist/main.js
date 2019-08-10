class Controler{
    fetchRecipesData(){
        let ingredient = ($("#ingerdient-input").val() || "_")
        $.get(`/recipes/${ingredient}`, function(response){
            console.log(response)
            renderer.render({response})
        })
    }

    fetchfirstIngredient(){
        let ingredient = $(this).closest(".recipe").find(".ingredients-list li:first-child").text()
        console.log(ingredient)
    }
}

const renderer = new Renderer()
const controler = new Controler()

$("#recipes-container").on("click", ".img-container", controler.fetchfirstIngredient)