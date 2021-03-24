module Api
  module V1
    class RestaurantsController < ApplicationController
      # Before Actions and Callbacks
      skip_before_action :verify_authenticity_token

      # ------------------ Custom methods -------------------
      def serialized(item)
        RestaurantSerializer.new(item).serialized_json
      end

      def serialized_options(item, option)
        RestaurantSerializer.new(item, option).serialized_json
      end

      # ------------------- CRUD Methods --------------------
      def index
        restaurants = Restaurant.all

        render json: serialized_options(restaurants, options)
      end

      def show
        restaurant = Restaurant.find(params[:id])

        render json: serialized_options(restaurant, options)
      end

      def create
        restaurant = Restaurant.new(restaurant_params)

        if restaurant.save
          render json: serialized(restaurant)
        else
          render json: { error: restaurant.error.messages }, status: 422
        end
      end

      def update
        restaurant = Restaurant.find(params[:id])

        if restaurant.update(restaurant_params)
          render json: serialized_options(restaurants, options)
        else
          render json: { error: restaurant.error.messages }, status: 422
        end
      end

      def destroy
        restaurant = Restaurant.find(params[:id])

        if restaurant.destroy
          head :no_content
        else
          render json: { error: restaurant.error.messages }, status: 422
        end
      end

      private

      def restaurant_params
        params.require(:restaurant).permit(
          :name,
          :description
        )
      end

      def options
        @options ||= { include: %i[reviews] }
      end

    end
  end
end
