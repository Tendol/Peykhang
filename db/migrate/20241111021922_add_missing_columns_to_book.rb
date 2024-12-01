class AddMissingColumnsToBook < ActiveRecord::Migration[7.2]
  def change
    # Add any missing columns to existing tables
    add_column :books, :publication_date, :datetime, if_not_exists: true
    add_column :books, :isbn, :string, limit: 13, if_not_exists: true
    add_column :books, :title, :string,  if_not_exists: true
    add_column :books, :short_title, :string, if_not_exists: true

    # Add any missing indexes
    add_index :books, :isbn, unique: true, if_not_exists: true
  end
end
