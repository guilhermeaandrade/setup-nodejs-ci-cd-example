exports.sayHello = (name = "") => {
  return `Hello ${name ? name : "world"}`;
};
