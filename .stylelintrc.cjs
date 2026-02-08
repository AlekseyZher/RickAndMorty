module.exports = {
  extends: ["stylelint-config-standard-scss"],

  rules: {
    "color-function-notation": "modern",
    "alpha-value-notation": "percentage",
    "selector-class-pattern": "^[a-z][a-z0-9]*(-[a-z0-9]+)*$|^[a-z][a-zA-Z0-9]*$",

    "declaration-block-no-duplicate-properties": true,
    "shorthand-property-no-redundant-values": true,

    "declaration-empty-line-before": [
      "always",
      {
        except: ["after-declaration", "first-nested"],
        ignore: ["after-comment", "inside-single-line-block"],
      },
    ],
  },

  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
