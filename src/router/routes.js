import About from "@/views/About";
import Blog from "@/views/Blog";
import Home from "@/views/Home";
import Message from "@/views/Message";
import Project from "@/views/Project";
import Detail from "@/views/Blog/Detail";

const routes = [
  { name: "About", path: "/about", component: About },
  { name: "Blog", path: "/article", component: Blog },
  { name: "CategoryBlog", path: "/article/cate/:categoryId", component: Blog },
  { name: "Detail", path: "/article/:id", component: Detail },
  { name: "Home", path: "/", component: Home },
  { name: "Message", path: "/message", component: Message },
  { name: "Project", path: "/project", component: Project },
];
export default routes;
