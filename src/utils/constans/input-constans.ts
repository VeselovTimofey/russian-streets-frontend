const INPUT_SEARCH_CLASS = {
  "label": "form popup__search-element",
  "title": "text-font text-font_bold text-font_size_medium",
  "input": "popup__search-input text-font text-font_regular text-font_size_medium",
  "error": "text-font text-font_regular text-font_size_tiny form__input-error",
};

const INPUT_REGISTER_CLASS = {
  "label": "form__input-elements",
  "title": "text-font text-font_bold text-font_color_white text-font_size_medium",
  "input": "form__input",
  "error": "text-font text-font_regular text-font_size_tiny form__input-error",
};

const INPUT_CLASS = {
  "register": INPUT_REGISTER_CLASS,
  "search": INPUT_SEARCH_CLASS,
};

export { INPUT_CLASS, INPUT_SEARCH_CLASS, INPUT_REGISTER_CLASS };