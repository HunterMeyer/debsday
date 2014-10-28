class AddVideoPathToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :video_path, :text
  end
end
