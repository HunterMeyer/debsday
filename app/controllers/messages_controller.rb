class MessagesController < ApplicationController

  def new
    @message = Message.new
  end

  def create
    @message = Message.create(message_params)
    if @message.save
      flash[:success] = 'Thank you'
      redirect_to root_path
    else
      # flash[:warning] = @message.errors.each { |x,y| puts "#{x.to_s} #{y.to_s}".titleize }
      flash[:warning] = 'Something went wrong'
    end
  end

  def destroy
    @message.find(params[:id]).destroy
  end

  private

  def message_params
    params.require(:message).permit(:name, :message, :photo, :video)
  end

end
