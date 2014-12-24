class MessagesController < ApplicationController
  http_basic_authenticate_with name: ENV['DEBS_UN'], password: ENV['DEBS_PW'], only: 'index'

  def index
    @messages = Message.all
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.create(message_params)
    if @message.save
      redirect_to success_path
    else
      render 'new'
    end
  end

  def success
  end

  def destroy
    @message.find(params[:id]).destroy
    redirect_to root_path
  end

  private

  def message_params
    params.require(:message).permit(:name, :message, :photo, :video)
  end

end
