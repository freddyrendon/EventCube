class Api::CategoriesController < ApplicationController
# before_action :require_logged_in, only: [:create, :update, :destroy]

    def index

        @categories = Categorie.all

        render :index
    end

    def show
        @categorie = Categorie.find_by!(id: params[:id])
        render :show
        # if conditional to render errors 
    end
    
    def create
        @categorie = Categorie.new(categorie_params)

        if @categorie.save
            render :show
        else
            render json: @categorie.errors.full_messages, status: 422
        end
    end

    
    def destroy
        @categorie = Categorie.find(params[:id])

        if @categorie.destroy
            render :show
        else
            render json: @categorie.errors.full_messages, status: 422
        end
    end
   
    def update
        @categorie = Categorie.find_by(id: params[:id])
        # byebug
        if @categorie.update(Categorie_params)
            render :show
        else
            render json: @categorie.errors.full_messages, status: :unprocessable_entity
        end
    end


    def categorie_params
        params.require(:categorie).permit(:title)
    end
end
