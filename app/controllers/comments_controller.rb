class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy]
  
  def create
  end

  def destroy
  end
end
