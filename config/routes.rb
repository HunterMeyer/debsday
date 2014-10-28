Debsday::Application.routes.draw do
  resources :messages, only: [:new, :create, :destroy]

  root 'messages#new'

end
