Debsday::Application.routes.draw do
  resources :messages, only: [:new, :create, :destroy]

  root 'messages#new'

  match '/success', to: 'messages#success', via: 'get', as: 'success'

end
