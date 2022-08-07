const {loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const {expect} = require('chai');

const {ethers, waffle} = require('hardhat');

const {deployContract} = waffle;
const LibArtifact = require('../artifacts/contracts/lib.sol/LibTest.json');

describe("Lib tests", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.
  async function deployOnceFixture() {

    const [owner, ...otherAccounts] = await ethers.getSigners();
    lib = (await deployContract(owner, LibArtifact));

    return { lib, owner, otherAccounts };
  }

  describe("Testing test()", function () {
    it("s working testFunc ?", async function () {
      const { lib } = await loadFixture(deployOnceFixture); 
      expect(await lib.testFunc()).to.be.true;
    });
  });
});
