module ApplicationHelper

  def mobile_device?
    request.user_agent =~ /Mobile|webOS|Android|iPad|iPhone/i
  end

end
