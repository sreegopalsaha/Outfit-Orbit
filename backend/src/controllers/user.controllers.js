import asyncHandler from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler((req, res, next) => {
    res.status(200).json(new ApiResponse(200, {}, "Working"));

});

const loginUser = asyncHandler((req, res, next) => {
    res.status(200).json(new ApiResponse(200, {}, "Working"));

});

export { registerUser, loginUser };