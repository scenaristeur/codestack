import { Request, Response } from "express";
import StageModel from "./stage.model";
import {
  CreateStageInput,
  FilterQueryInput,
  ParamsInput,
  UpdateStageInput,
} from "./stage.schema";

export const createStageController = async (
  req: Request<{}, {}, CreateStageInput>,
  res: Response
) => {
  try {
  const { titre, description, /*content, category, published*/ } = req.body;

    const stage = await StageModel.create({
      titre,
      description,
      // category,
      // published,
    });

    res.status(201).json({
      status: "success",
      data: {
        stage,
      },
    });
  } catch (error: any) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({
        status: "failed",
        message: "Stage with that title already exists",
      });
    }

    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const updateStageController = async (
  req: Request<UpdateStageInput["params"], {}, UpdateStageInput["body"]>,
  res: Response
) => {
  try {
    const result = await StageModel.update(
      { ...req.body, updatedAt: Date.now() },
      {
        where: {
          id: req.params.stageId,
        },
      }
    );

    if (result[0] === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Stage with that ID not found",
      });
    }

    const stage = await StageModel.findByPk(req.params.stageId);

    res.status(200).json({
      status: "success",
      data: {
        stage,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findStageController = async (
  req: Request<ParamsInput>,
  res: Response
) => {
  try {
    const stage = await StageModel.findByPk(req.params.stageId);

    if (!stage) {
      return res.status(404).json({
        status: "fail",
        message: "Stage with that ID not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        stage,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findAllStagesController = async (
  req: Request<{}, {}, {}, FilterQueryInput>,
  res: Response
) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const stages = await StageModel.findAll({ limit, offset: skip });

    res.set('X-Total-Count', stages.length)
    // res.status(200).json({
    //   status: "success",
    //   results: notes.length,
    //   notes,
    // });
    res.status(200).json(stages);
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const deleteStageController = async (
  req: Request<ParamsInput>,
  res: Response
) => {
  try {
    const result = await StageModel.destroy({
      where: { id: req.params.stageId },
      force: true,
    });

    if (result === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Stage with that ID not found",
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
