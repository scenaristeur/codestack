import { Request, Response } from "express";
import UserModel from "./user.model";
import {
  CreateUserInput,
  FilterQueryInput,
  ParamsInput,
  UpdateUserInput,
} from "./user.schema";

export const createUserController = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) => {
  try {
    const { title, content, category, published } = req.body;

    const user = await UserModel.create({
      title,
      content,
      category,
      published,
    });

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error: any) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({
        status: "failed",
        message: "User with that title already exists",
      });
    }

    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const updateUserController = async (
  req: Request<UpdateUserInput["params"], {}, UpdateUserInput["body"]>,
  res: Response
) => {
  try {
    const result = await UserModel.update(
      { ...req.body, updatedAt: Date.now() },
      {
        where: {
          id: req.params.userId,
        },
      }
    );

    if (result[0] === 0) {
      return res.status(404).json({
        status: "fail",
        message: "User with that ID not found",
      });
    }

    const user = await UserModel.findByPk(req.params.userId);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findUserController = async (
  req: Request<ParamsInput>,
  res: Response
) => {
  try {
    const user = await UserModel.findByPk(req.params.userId);

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User with that ID not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findAllUsersController = async (
  req: Request<{}, {}, {}, FilterQueryInput>,
  res: Response
) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const users = await UserModel.findAll({ limit, offset: skip });
    res.set('X-Total-Count', users.length)
    // res.status(200).json({
    //   status: "success",
    //   results: users.length,
    //   users,
    // });
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const deleteUserController = async (
  req: Request<ParamsInput>,
  res: Response
) => {
  try {
    const result = await UserModel.destroy({
      where: { id: req.params.userId },
      force: true,
    });

    if (result === 0) {
      return res.status(404).json({
        status: "fail",
        message: "User with that ID not found",
      });
    }

    res.status(204).json();
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
