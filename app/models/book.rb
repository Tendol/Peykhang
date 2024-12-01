class Book < ApplicationRecord
  include BaseModel

  attribute :title, :string
  validates :title, presence: true

  attribute :short_title, :string
  attribute :isbn, :string
  validates :isbn, uniqueness: true, allow_nil: true, length: { is: 13 }

  # Custom validation for ISBN format
  validate :valid_isbn_format, if: -> { isbn.present? }

  private

  def valid_isbn_format
    unless isbn.match?(/^\d{13}$/)
      errors.add(:isbn, "must be a valid 13-digit number")
    end
  end

  attribute :description, :text
  attribute :published_date, :date


  has_many :book_authors
  has_many :authors, through: :book_authors
end
