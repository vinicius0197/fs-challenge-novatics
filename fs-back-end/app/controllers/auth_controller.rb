class AuthController < ApplicationController
  def login
    user = User.find_by(username: params[:user][:username])
    if user && user.authenticate(params[:user][:password])
      payload = { user_id: user.id }
      token = encode_token(payload)
      render json: { user: user, jwt: token, success: "Welcome" }
    else
      render json: { failure: "Log in failed" }
    end
  end

  def auto_login
    if session_user
      render json: session_user
    else
      render json: { errors: "Not logged in" }
    end
  end
end
