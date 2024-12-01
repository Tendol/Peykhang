class Api::V1::BooksController < ApplicationController
  def index
    book = Book.all.order(created_at: :desc)
    render json: book
  end

  def create
    book = Book.create!(book_params)
    if bookx
      render json: book
    else
      render json: book.errors
    end
  end

  def show
  end

  def destroy
  end

  private
  def book_params
    params.permit(:name)
  end
end
