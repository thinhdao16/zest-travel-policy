import { faPage4 } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Dashboard",
    path: "/",
    icon: faTachometer,
  },
  {
    label: 'Halaman'
  },
  {
    label: "Blank",
    path: "/blank",
    icon: faPage4,
  },
  {
    label: 'Otentikasi'
  },
  {
    label: "Login",
    path: "/auth/login",
    icon: faLock,
  },

];

export default initMenu