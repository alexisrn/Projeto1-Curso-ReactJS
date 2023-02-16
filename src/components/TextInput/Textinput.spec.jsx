const { render, screen } = require("@testing-library/react");
const { TextInput } = require(".");
const { default: userEvent } = require("@testing-library/user-event");

describe("<Posts />", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={"testando"} />);
    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe("testando");
  });

  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    const value = "o valor";

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

   /*it("should match snapshot", () => {
    const { container } = render(<TextInput />);
    expect(container.firstChild).toMatchSnapshot(); 
}) */
});
