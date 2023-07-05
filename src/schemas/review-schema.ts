import joi from "joi";

import { Review } from "../protocols/review";

const REQUIRED_REVIEW_LENGTH = 100;

export const reviewSchema = joi.object<Review>({
  id: joi.number().required(),
  read: joi.boolean().required(),
  grade: joi.number().min(0).max(10).required(),
  review: joi.string().min(REQUIRED_REVIEW_LENGTH).required()
});