import kind from "@enact/core/kind";
import { Header, Panel } from "@enact/sandstone/Panels";
import PropTypes from "prop-types";
import Image from "@enact/sandstone/Image";

const genders = {
  m: "Male",
  f: "Female",
};
const DetailBase = kind({
  name: "Detail",

  propTypes: {
    color: PropTypes.string,
    gender: PropTypes.oneOf(["m", "f"]),
    name: PropTypes.string,
    weight: PropTypes.number,
  },

  defaultProps: {
    color: "Tabby",
    gender: "m",
    weight: 9,
  },

  computed: {
    imageUrl: ({ kittenIndex }) =>
      `//loremflickr.com/300/300/kitten?random=${kittenIndex}`,
  },

  render: ({ color, gender, name, weight, imageUrl, ...rest }) => {
    console.log("2 panel");

    return (
      <Panel {...rest}>
        <Header title={name} />
        <div>Gender: {genders[gender]}</div>
        <div>Color: {color}</div>
        <div>Weight: {weight}oz</div>
        {/* <img src={imageUrl} alt="cat image" /> */}
        <Image
          src={imageUrl}
          alt="cat image"
          style={{ margin: 0, aspectRatio: 1, width: 300, height: 300 }}
        />
      </Panel>
    );
  },
});

export default DetailBase;
export { DetailBase as Detail, DetailBase };
