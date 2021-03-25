module Api
  module V1
    class ReviewsController < ApplicationController
      # --------------------- Before Actions and Callbacks --------------------
      skip_before_action :verify_authenticity_token

      # --------------------------- Custom Methods ----------------------------
      def serialized(item)
        ReviewSerializer.new(item).serialized_json
      end

      # ---------------------------- CRUD Methods -----------------------------
      def create
        review = restaurant.reviews.new(review_params)

        if review.save
          render json: serialized(review)
        else
          render json: { error: review.error.messages }, status: 422
        end
      end

      def destroy
        review = Review.find(params[:id])

        if review.destroy
          head :no_content
        else
          render json: { error: review.error.messages }, status: 422
        end
      end

      private

      def review_params
        params.require(:review).permit(
          :user_name,
          :restaurant_id,
          :description,
          :score
        )
      end

      def restaurant
        @restaurant = Restaurant.find(params[:restaurant_id])
      end

    end
  end
end