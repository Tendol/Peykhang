Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  namespace :api do
    namespace :v1 do
      get "books/index"
      post "books/create"
      get "/show/:id", to: "books#show"
      delete "/destroy/:id", to: "books#destroy"
    end
  end
  root "homepage#index"
  get "*path" => "homepage#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/*
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  post "/graphql", to: "graphql#execute"

  # Defines the root path route ("/")
  # root "posts#index"
end
