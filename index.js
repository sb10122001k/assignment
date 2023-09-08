import express from "express";
import cors from "cors";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

app.use(cors());
app.use(express.json())
const port = process.env.PORT || 8080;

httpServer.listen(port, "0.0.0.0", () => {
  console.log(`Now listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/calculate", (req, res) => {
    try {
        const data = req.body;
        let result;
    
        // Convert num1 and num2 to numbers
        const num1 = Number(data.num1);
        const num2 = Number(data.num2);
    
        switch (data.op) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          default:
            throw new Error("Invalid operation");
        }
    
        res.json({ result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})