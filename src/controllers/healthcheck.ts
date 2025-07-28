import { Request, Response } from "express";

class HealthCheck {
  public checkServerHealth(req: Request, res: Response): void {
    res.status(200).json({
      success: true,
      message: "Server is healthy ",
      timestamp: new Date().toISOString(),
    });
  }
}

export default HealthCheck;