import About from "@/views/About";
import Blog from "@/views/Blog";
import Home from "@/views/Home";
import Message from "@/views/Message";
import Project from "@/views/Project";

const routes = [
  { name: "About", path: "/about", component: About },
  { name: "Blog", path: "/blog", component: Blog },
  { name: "Home", path: "/", component: Home },
  { name: "Message", path: "/message", component: Message },
  { name: "Project", path: "/project", component: Project },
];
export default routes;
