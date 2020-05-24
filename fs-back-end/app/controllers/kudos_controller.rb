class KudosController < ApplicationController
  def index
    user = session_user
    kudos = User.where(["id = ?", user[:id]]).select("id", "awesome_kudo", "grateful_kudo", "learned_kudo").first
    render json: { success: 'Fetched kudos', kudos: kudos }
  end

  def create
    if has_kudos(kudo_params[:sender_id], kudo_params[:kudo_type])
      kudo = Kudo.create(kudo_params)
      if kudo.valid?
        update_sender_kudos(kudo_params[:sender_id], kudo_params[:kudo_type])
        kudos = User.where(["id = ?", kudo_params[:sender_id]]).select("id", "awesome_kudo", "grateful_kudo", "learned_kudo").first
        render json: { success: 'Kudo was created', kudos: kudos }, status: :created
      else
        render json: { errors: 'Request invalid' }, status: :not_acceptable
      end

    else
      render json: { errors: "You don't gave enough kudos" }
    end
  end


  private
  def kudo_params
    params.require(:kudo).permit(:description, :sender_id, :recipient_id, :kudo_type)
  end

  def has_kudos(user_id, kudo_type)
    user = User.find(user_id)
    case kudo_type
    when "learn"
      if user.learned_kudo < 1
        return false
      end
    when "grateful"
      if user.grateful_kudo < 1
        return false
      end
    when "awesome"
      if user.awesome_kudo < 1
        return false
      end
    end
    return true
  end

  def update_sender_kudos(user_id, kudo_type)
    user = User.find(user_id)
    case kudo_type
    when "learn"
      user.update_column(:learned_kudo, user.learned_kudo += -1)
    when "grateful"
      user.update_column(:grateful_kudo, user.grateful_kudo += -1)
    when "awesome"
      user.update_column(:awesome_kudo, user.awesome_kudo += -1)
    end
  end
end
