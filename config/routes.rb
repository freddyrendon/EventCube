Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do

   
    resources :users do 
      resources :registrations, only: [:index]
      # resources :likes, only: [:index]
    end
    resource :session, only: [:create, :destroy]
     resources :events, only: [:create, :index, :destroy, :update, :show]
      # resources :registrations, only: [:create]
      # resources :likes, only: [:create]

    resources :registrations, only: [:destroy]
    # resources :likes, only: [:destroy]
    resources :categories, only: [:show, :create, :destroy, :update, :index]
    resources :likes, only: [:create, :index, :destroy, :show]
  end
end

