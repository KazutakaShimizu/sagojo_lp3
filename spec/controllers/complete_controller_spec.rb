require 'rails_helper'

RSpec.describe CompleteController, type: :controller do

  describe "GET #complete" do
    it "returns http success" do
      get :complete
      expect(response).to have_http_status(:success)
    end
  end

end
