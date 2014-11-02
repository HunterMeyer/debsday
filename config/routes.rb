Debsday::Application.routes.draw do
  resources :messages, only: [:new, :create, :success, :destroy]

  root 'messages#new'

end
