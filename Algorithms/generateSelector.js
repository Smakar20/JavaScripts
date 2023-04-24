/*
Given a DOM tree and a target element, generate a valid selector to target it.

For example, for a DOM tree like below

<div>
  <p>BFE.dev</p>
  <div>
    is
    <p>
      <span>great. <button>click me!</button></span>
    </p>
  </div>
</div>
There could be more than 1 answer.

let selector = generateSelector(root, target) // 'button'
expect(root.querySelector(selector)).toBe(target)

selector = generateSelector(root, target) // 'div > div > p > button'
expect(root.querySelector(selector)).toBe(target)
*/

function generateSelector(root, target) {
  if (target.id) return `#${target.id}`;
  let res = '';
  dfs(root, []);
  return res;

  function dfs(cur, path) {
    if (cur === target) {
      res = path.join(' > ');
      return;
    }

    const children = Array.from(cur.children)
    for (const child of children) {
      path.push(child.tagName.toLowerCase());
      dfs(child, path);
      path.pop();
    }
  }
}
