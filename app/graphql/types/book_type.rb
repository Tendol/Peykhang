# frozen_string_literal: true

module Types
  class BookType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :authors, [ Types::AuthorType ], null: true
    field :published_date, GraphQL::Types::ISO8601Date, null: true
    field :isbn, String, null: true
  end
end
