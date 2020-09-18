import { nav, validation } from "./lib/index.js";

nav();

switch (location.pathname) {
  case "/form/":
    validation();
}
