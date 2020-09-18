const form = document.querySelector("form");

const fields = form.querySelectorAll("div:not(:last-of-type)");

export default () => {
  console.log(fields);
};
