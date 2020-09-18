const form = document.querySelector("form");

const fields = form.querySelectorAll("div:not(:last-of-type)");

// We need to seperate out the 'speacial' from the 'regular' fields
const regularFields = [...fields].filter(
  (field) => !field.hasAttribute("data-status")
);

export default () => {
  console.log(fields, regularFields);
};
