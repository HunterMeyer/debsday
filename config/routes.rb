Debsday::Application.routes.draw do
  resources :messages, except: [:show]

  root 'messages#new'

  match '/success', to: 'messages#success', via: 'get', as: 'success'

end
