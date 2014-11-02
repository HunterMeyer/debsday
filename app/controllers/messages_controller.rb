class MessagesController < ApplicationController

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
