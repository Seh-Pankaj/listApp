const toDoList = artifacts.require("toDoList");

module.exports = function(deployer) {
  deployer.deploy(toDoList);
};
