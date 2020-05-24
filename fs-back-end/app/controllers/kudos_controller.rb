class KudosController < ApplicationController
  def create
    kudo = Kudo.create(kudo_params)
    if kudo.valid?
      render json: { success: 'Kudo was created' }, status: :created
    else
      render json: { errors: 'Request invalid' }, status: :not_acceptable
    end
  end


  private
  def kudo_params
    params.require(:kudo).permit(:description, :sender_id, :recipient_id, :kudo_type)
  end
end
