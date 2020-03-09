import { style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';

export const actionButtonStyle = style({
  flex: '0 0 auto',
  background: 'none',
  lineHeight: '0px',
  padding: '0px 4px',
  width: '16px',
  border: 'none',
  outline: 'none'
});

export const hiddenButtonStyle = style({
  display: 'none'
});

export const showButtonOnHover = (() => {
  const styled: NestedCSSProperties = {
    $nest: {}
  };
  const selector = `&:hover .${hiddenButtonStyle}`;
  styled.$nest[selector] = {
    display: 'block'
  };
  return styled;
})();
