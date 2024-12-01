class CreateBaseModels < ActiveRecord::Migration[7.2]
  def change
    create_table :base_models do |t|
      t.timestamps
    end
  end
end
