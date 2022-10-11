@categories.each do |categorie|
    json.set! categorie.id do
        json.partial! 'api/categories/categorie', categorie: categorie
    end
end