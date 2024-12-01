class RemoveNameFromTheBookModel < ActiveRecord::Migration[7.2]
  def change
    remove_column :books, :name
  end
end
