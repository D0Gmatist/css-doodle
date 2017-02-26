
function clamp(num, min, max) {
  return (num <= min) ? min : ((num >= max) ? max : num);
}

export default function parse(size) {
  const split = (size + '')
    .replace(/\s+/g, '')
    .replace(/[,，xX]+/, 'x')
    .split('x');
  const ret = {
    x: clamp(parseInt(split[0], 10), 1, 16),
    y: clamp(parseInt(split[1] || split[0]), 1, 16)
  };
  return {
    x: ret.x,
    y: ret.y,
    count: ret.x * ret.y
  };
}