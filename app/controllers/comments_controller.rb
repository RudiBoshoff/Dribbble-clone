class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy]
  before_action :set_shot, only: [:create, :destroy]

  def create
    @comment = @shot.comments.create(comment_params)
    @comment.user_id = current_user.id if current_user #assigns logged in user's id to comment
    if @comment.save
      redirect_to shot_path(@shot)
    else
      render "shots/show"
    end
  end

  def destroy
    @comment = @shot.comments.find(params[:id])
    @comment.destroy
    redirect_to shot_path(@shot)
  end

  private
  def set_shot
    # find show with the associated shot_id
    @shot = Shot.find(params[:shot_id])
  end

  def comment_params
    params.require(:comment).permit(:response)
  end
end
