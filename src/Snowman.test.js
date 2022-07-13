import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman.js";
const TEST_IMAGES = ["img1.com", "img2.com", "img3.com"];

it("renders without crashing", function () {
  render(<Snowman />);
});

it("matches snapshot", function () {
  const { container } = render(
    <Snowman />
  );
  expect(container).toMatchSnapshot();
});

it("displays you lose message when reached max guesses", function () {
  const { container } = render(
    <Snowman images={TEST_IMAGES} words="test" maxWrong={2} />
  );

  const guessLetterA = container.querySelector("#a");
  fireEvent.click(guessLetterA);
  const guessLetterB = container.querySelector("#b");
  fireEvent.click(guessLetterB);

  expect(
    container.querySelector('#lose')
  ).toBeInTheDocument();
  expect(
    container.querySelector("#a")
  ).not.toBeInTheDocument();
});