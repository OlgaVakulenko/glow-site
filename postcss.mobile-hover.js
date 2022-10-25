const { rule } = require('postcss');
const postcss = require('postcss');

const transform = (node) => {
  console.log(node);
  return `@media (hover: hover) {
    ${node}
  }`;
};

module.exports = postcss.plugin('mobile-hover', () => {
  return (root) => {
    root.walkRules((rule) => {
      if (rule.selector.indexOf(':hover') !== -1) {
        const clone = rule.clone();
        const hoverSelectors = [];

        const selectors = rule.selectors.filter((s) => {
          if (s.indexOf(':hover') !== -1) {
            hoverSelectors.push(s);
            return false;
          }
          return true;
        });

        if (selectors.length > 0) {
          clone.selectors = hoverSelectors;
          rule.selectors = selectors;
          rule.parent.prepend(transform(clone));
        } else {
          rule.replaceWith(transform(clone));
        }
      }
    });
  };
});
