const sayHelloWorld = require("./sayHelloWorld");

describe("Say Hello tests", () => {
  it("should say Hello World", () => {
    const response = sayHelloWorld.sayHello();
    expect(response).toBe("Hello World");
  });

  it("should say Hello Guilherme", () => {
    const response = sayHelloWorld.sayHello("Guilherme");
    expect(response).toBe("Hello Guilherme");
  });
});
