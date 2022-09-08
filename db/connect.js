const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("test", "centos", "Ecust2022", {
  host: "43.142.96.10",
  dialect: "mysql"
});
async function test() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
test();
