class RestaurantsController < ApplicationController
  before_action set_restaurant

  def index
    @restaurants = Restaurant.all
  end

  def show; end

  def new
    @restaurant = Restaurant.new
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
  end

  def update
    @restaurant = Restaurant.update(restaurant_params)
  end

  def destroy
    @restaurant.delete
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end

  def restaurant_params
    params.require(:restaurant).permit(
      :name,
      :description
    )
  end
end
