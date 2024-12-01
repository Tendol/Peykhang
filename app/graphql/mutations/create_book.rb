module Mutations
  class CreateBook < BaseMutation
    # arguments passed to the `resolve` method
    argument :title, String, required: false

    # return type from the mutation
    type Types::BookType

    def resolve(**arguments)
      Book.create!(
        title: arguments[:title],
      )
    end
  end
end
