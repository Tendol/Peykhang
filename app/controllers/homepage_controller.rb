class HomepageController < ApplicationController
  def index
    respond_to do |format|
      format.html { render "index" }  # Will render index.html.erb
      format.all { redirect_to root_path }  # Redirect other formats to root
    end
  end
end
