class Message < ActiveRecord::Base
  has_attached_file :photo
  has_attached_file :video, less_than: 10.megabytes
  validates_attachment :photo, content_type: { content_type: ['image/jpeg', 'image/gif', 'image/png'] }, less_than: 2.megabytes
  validates_presence_of :name

end
