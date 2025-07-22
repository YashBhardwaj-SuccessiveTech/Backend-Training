// 6.Implement middleware to validate the geographic location of the client.
// If the request is not coming from an expected region, respond with an error.

import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

const allowedCountries = ["IN"];

export const geolocmidd = (req: Request, res: Response, next: NextFunction) => {
  // Get ip
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
    req.socket.remoteAddress ||
    "";
  console.log(ip);
  if (ip === "::1") {
    console.log(`Access granted`);
    return next();
  }
  const geo = geoip.lookup(ip);

  if (!geo || !allowedCountries.includes(geo.country)) {
    return res.status(403).json({
      message: "Access denied. Your region is not allowed.",
      success: false,
    });
  }

  console.log(`Access granted from ${geo.country}`);
  next();
};
