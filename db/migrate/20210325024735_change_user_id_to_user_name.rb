class ChangeUserIdToUserName < ActiveRecord::Migration[6.1]
  def change
    rename_column :reviews, :user_id, :user_name
    change_column :reviews, :user_name, :string
  end
end
