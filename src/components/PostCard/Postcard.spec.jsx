const { render, screen } = require("@testing-library/react");
const { PostCard } = require(".");
const { PostCardMock } = require("./mock");

const props = PostCardMock;

describe("<PostCard />", () => {
  it("should  render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', {name: 'title'})).toHaveAttribute('src', 'img/img.png');

    expect(screen.getByRole('heading', {name: 'title'})).toBeInTheDocument();

    expect(screen.getByText('body')).toBeInTheDocument();
    
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  })
});
