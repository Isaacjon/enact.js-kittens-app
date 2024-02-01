import kind from "@enact/core/kind";
import PropTypes from "prop-types";
import css from "./Kitten.module.less";
import Spottable from "@enact/spotlight/Spottable";
import Image from "@enact/sandstone/Image";

const SpottableDiv = Spottable("div");

const KittenBase = kind({
  name: "Kitten",

  propTypes: {
    children: PropTypes.string,
    size: PropTypes.number,
    onSelect: PropTypes.func,
    index: PropTypes.number,
  },

  defaultProps: {
    size: 300,
  },

  styles: {
    css,
    className: "kitten",
  },

  handlers: {
    handleClick: (ev, { index, onSelect }) => {
      if (onSelect) {
        onSelect({ index });
      }
    },
  },

  computed: {
    url: ({ index, size }) => {
      return `//loremflickr.com/${size}/${size}/kitten?random=${index}`;
    },
  },

  render: ({ children, handleClick, size, url, ...rest }) => {
    delete rest.index;
    delete rest.onSelect;

    return (
      <SpottableDiv {...rest} onClick={handleClick}>
        {/* <img src={url} alt="Kitten" width={size} height={size} /> */}
        <Image
          src={url}
          alt="Kitten"
          style={{
            width: size,
            height: size,
            margin: 0,
            display: "inline-block",
          }}
        />
        <div>{children}</div>
      </SpottableDiv>
    );
  },
});

const Kitten = KittenBase;

export default Kitten;
export { Kitten, KittenBase };
