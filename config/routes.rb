Rails.application.routes.draw do
  resources :shots do
    resources :comments, except: [:update, :edit, :show]
    member do
      put 'like', to: "shots#vote"
    end
  end
  devise_for :users, controllers: { registrations: 'registrations' }

  root "shots#index"
  get 'profile/:id', to: "users#index", as: "profile"
end
