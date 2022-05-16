import "./commands";
import { isMobile } from "./utils";

// Throttle API responses for mobile testing to simulate real world condition
beforeEach(() => {
  if (isMobile()) {
    cy.intercept(
      { url: 'http://localhost:3001/**"', middleware: true },
      (req) => {
        req.on("response", (res) => {
          res.setThrottle(1000);
        });
      }
    );
  }
});
