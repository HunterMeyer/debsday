class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text  :name
      t.text  :message
      t.attachment :photo
      t.attachment :video
      t.timestamps
    end
  end
end
