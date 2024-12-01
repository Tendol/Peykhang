class Author < ApplicationRecord
  include BaseModel

  attribute :first_name, :string
  attribute :last_name, :string
  attribute :biography, :text

  attribute :email, :string
  validates :email, uniqueness: true, allow_nil: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, if: -> { email.present? }

  has_many :book_authors
  has_many :books, through: :book_authors

  # Instance methods
  def full_name
    "#{first_name} #{last_name}"
  end
end
