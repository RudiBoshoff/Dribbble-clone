class ShotsController < ApplicationController
  before_action :set_shot, only: [:show, :edit, :update, :destroy, :vote]
  before_action :authenticate_user!, only: [:edit, :update, :destroy, :vote]

  # actions to track with impressionist gem
  impressionist actions: [:show], unique: [:impressionable_type, :impressionable_id, :session_hash]

  # GET /shots
  # GET /shots.json
  def index
    # sort shots by number of views then by when it was created (newist first)
    @shots = Shot.all.sort_by {|shot| [shot.impressionist_count, shot.created_at]}.reverse
  end

  # GET /shots/1
  # GET /shots/1.json
  def show
    @comment = @shot.comments.new
    @comment.user_id = current_user.id if current_user 
  end

  # GET /shots/new
  def new
    @shot = current_user.shots.build
  end

  # GET /shots/1/edit
  def edit
  end

  # POST /shots
  # POST /shots.json
  def create
    @shot = current_user.shots.build(shot_params)

    respond_to do |format|
      if @shot.save
        format.html { redirect_to @shot, notice: 'Shot was successfully created.' }
        format.json { render :show, status: :created, location: @shot }
      else
        format.html { render :new }
        format.json { render json: @shot.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shots/1
  # PATCH/PUT /shots/1.json
  def update
    respond_to do |format|
      if @shot.update(shot_params)
        format.html { redirect_to @shot, notice: 'Shot was successfully updated.' }
        format.json { render :show, status: :ok, location: @shot }
      else
        format.html { render :edit }
        format.json { render json: @shot.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shots/1
  # DELETE /shots/1.json
  def destroy
    @shot.destroy
    respond_to do |format|
      format.html { redirect_to shots_url, notice: 'Shot was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def vote
    if !current_user.liked? @shot
      @shot.liked_by current_user
    elsif current_user.liked? @shot
      @shot.unliked_by current_user
    end

    respond_to do |format|
      format.js
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shot
      @shot = Shot.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def shot_params
      params.require(:shot).permit(:title, :description, :user_shot)
    end
end
