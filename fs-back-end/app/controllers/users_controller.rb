class UsersController < ApplicationController
  def index
    @users = User.select(:id, :username, :avatar, :learned_kudo, :grateful_kudo, :awesome_kudo)
    render json: { users: @users }, include: 'received_kudos'
  end

  def create
    user = User.create(user_params)
    if user.valid?
      payload = {user_id: user.id}
      token = encode_token(payload)
      render json: { user: user, jwt: token }
    else
      render json: { errors: user.errors.full_messages }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :avatar)
  end
end
