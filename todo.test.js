require("dotenv").config({ path: ".env.testing" });
const mongoose = require("mongoose");
const app = require("./index");
const request = require("supertest");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL);
});

describe("Todo", () => {
   let todoId;

  test("Create Todo", async () => {
    const res = await request(app).post("/todos/create").send({
      title: "Learn testing",
      description: "Testing using jest",
      status: "pending",
    });
    console.log(res.body);
    expect(res.statusCode).toBe(201);
    expect(res.body.msg).toBe("Todo created successfully");
  }, 1000);


  test("Read Todos", async () => {
    const res = await request(app).get("/todos/");
    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("List of todos");
  }, 1000);


  test("Update Todo", async () => {
    // Create a new todo
    const createRes = await request(app).post("/todos/create").send({
      title: "Learn Jest",
      description: "Testing APIs with Jest",
      status: "pending",
    });
  
    console.log("Create Todo Response:", createRes.body); // Debugging
  
    // Ensure the response includes the created todo with an _id
    if (!createRes.body || !createRes.body.todo || !createRes.body.todo._id) {
      throw new Error(`Todo creation failed. Response: ${JSON.stringify(createRes.body)}`);
    }
  
    const todoId = createRes.body._id;
  
    // Send PUT request to update the todo
    const res = await request(app).put(`/todos/${todoId}`).send({
      title: "Learn Jest - Updated",
    });
  
    expect(res.statusCode).toBe(200); 
    expect(res.body.msg).toBe("Todo updated successfully");
  });
  test("Delete Todo", async () => {
    const res = await request(app).delete(`/todos/${todoId}`)
    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Todo deleted successfully");
  });
  test("Mising or invalid inputs", async () => {
    const res = await request(app).post("/todos/create").send({
      title: " ",
      description: "For missing or invalid inputs",
      status: "pending",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.msg).toBe("Title is missing");
  },1000);
});

afterAll(async () => {
  await mongoose.connection.close();
});
