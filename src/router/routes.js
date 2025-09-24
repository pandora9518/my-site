import About from "@/views/About";
import Blog from "@/views/Blog";
import Home from "@/views/Home";
import Message from "@/views/Message";
import Project from "@/views/Project";

const routes = [
  { path: "/about", component: About },
  { path: "/blog", component: Blog },
  { path: "/", component: Home },
  { path: "/message", component: Message },
  { path: "/project", component: Project },
]
export default routes;