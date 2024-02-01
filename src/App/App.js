import kind from "@enact/core/kind";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import { Panels } from "@enact/sandstone/Panels";
import PropTypes from "prop-types";
import Changeable from "@enact/ui/Changeable";

const kittens = [
  "Garfield",
  "Nermal",
  "Simba",
  "Nala",
  "Tiger",
  "Kitty",
  "Charlie",
  "Lily",
  "Kitty",
  "Lucy",
  "Nala",
  "Simba",
  "Cleo",
  "Pepper",
];

import Detail from "../views/Detail";
import List from "../views/List";
import Greetings from "../views/Greetings";

const AppBase = kind({
  name: "App",

  propTypes: {
    kittenIndex: PropTypes.number,
    onKittenIndexChange: PropTypes.func,
    onPanelIndexChange: PropTypes.func,
    panelIndex: PropTypes.number,
  },

  defaultProps: {
    kittenIndex: 0,
    panelIndex: 0,
  },

  handlers: {
    onClickIntroBtn: (ev, { onPanelIndexChange }) => {
      // navigate to the list panel on click
      if (onPanelIndexChange) {
        onPanelIndexChange({
          panelIndex: ev?.index,
        });
      }
    },
    onSelectKitten: (ev, { onKittenIndexChange, onPanelIndexChange }) => {
      if (onKittenIndexChange) {
        onKittenIndexChange({
          kittenIndex: ev.index,
        });
      }

      // navigate to the detail panel on selection
      if (onPanelIndexChange) {
        onPanelIndexChange({
          panelIndex: 2,
        });
      }
    },

    onClickBackBtn: (ev, { onPanelIndexChange }) => {
      if (onPanelIndexChange) {
        onPanelIndexChange({
          panelIndex: ev.index,
        });
      }
    },
    onCloseBtn: (ev, { onPanelIndexChange }) => {
      onPanelIndexChange({
        panelIndex: 0,
      });
    },
  },

  render: ({
    kittenIndex,
    onSelectKitten,
    panelIndex,
    onClickIntroBtn,
    onClickBackBtn,
    onCloseBtn,
    ...rest
  }) => {
    delete rest.onKittenIndexChange;

    return (
      <Panels
        {...rest}
        index={panelIndex}
        onBack={onClickBackBtn}
        onClose={onCloseBtn}
      >
        <Greetings onClickIntroBtn={onClickIntroBtn} />
        <List onSelectKitten={onSelectKitten}>{kittens}</List>
        <Detail name={kittens[kittenIndex]} kittenIndex={kittenIndex} />
      </Panels>
    );
  },
});

const App = Changeable(
  { prop: "panelIndex", change: "onPanelIndexChange" },
  Changeable(
    { prop: "kittenIndex", change: "onKittenIndexChange" },
    ThemeDecorator(AppBase)
  )
);

export { App, AppBase };
export default App;
