Rails.application.routes.draw do
  resources :shots
  devise_for :users, controllers: { registrations: 'registrations' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "shots#index"
  get 'profile/:id', to: "users#index", as: "profile"
end
