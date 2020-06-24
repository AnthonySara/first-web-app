import Partie from "./Partie";

it("constructor Partie", () => {
  expect(new Partie().getNom).lastCalledWith;
  expect(new Partie().getNom).lastReturnedWith;
});
