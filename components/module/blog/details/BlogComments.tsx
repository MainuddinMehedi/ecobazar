import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const getMockComments = (blogId: string): Comment[] => [
  {
    _id: "c1",
    author: { name: "Annette Black", avatarUrl: "/assets/users/user-1.png" },
    createdAt: "2021-04-26T10:00:00Z",
    content:
      "In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.",
  },
  {
    _id: "c2",
    author: { name: "Devon Lane", avatarUrl: "/assets/users/user-2.png" },
    createdAt: "2021-04-24T14:30:00Z",
    content:
      "Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. Nam hendrerit, velit ut aliquam euismod, nibh tortor rutrum nisi.",
  },
  {
    _id: "c3",
    author: { name: "Jacob Jones", avatarUrl: "/assets/users/user-1.png" },
    createdAt: "2021-04-20T09:15:00Z",
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    _id: "c4",
    author: { name: "Jane Cooper", avatarUrl: "/assets/users/user.png" },
    createdAt: "2021-04-18T16:45:00Z",
    content:
      "Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh bibendum elit, a volutpat arcu dui nec orci. Aenean dui odio, ullamcorper quis turpis ac, volutpat imperdiet ex.",
  },
];

export default function BlogComments({ blogId }: { blogId: string }) {
  const comments = getMockComments(blogId);

  return (
    <section className="py-8 space-y-12">
      <CommentForm blogId={blogId} />
      <CommentList comments={comments} />
    </section>
  );
}
