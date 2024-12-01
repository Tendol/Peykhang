require "test_helper"

class Mutations::CreateBookTest < ActiveSupport::TestCase
  def perform(user: nil, **args)
    Mutations::CreateBook.new(object: nil, field: nil, context: {}).resolve(**args)
  end

  # test "create a new book" do
  #   book = perform(
  #     name: "Tendol test book"
  #   )

  #   assert book.persisted?
  #   assert_equal book.name, "Tendol test book"
  # end
end
