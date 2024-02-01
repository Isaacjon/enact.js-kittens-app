import kind from "@enact/core/kind";
import BodyText from "@enact/sandstone/BodyText";
import ActionGuide from "@enact/sandstone/ActionGuide";

const Greetings = kind({
  handlers: {
    handleClick: (ev, props, ctx) => {
      const { onClickIntroBtn } = props || {};
      if (onClickIntroBtn) {
        onClickIntroBtn({ index: 1 });
      }
    },
  },

  render: ({ handleClick }) => {
    return (
      <div>
        <h1>
          <BodyText centered>
            click the button to see the list of cute cats!
          </BodyText>
        </h1>
        <ActionGuide icon="arrowlargedown" onClick={handleClick}>
          START
        </ActionGuide>
      </div>
    );
  },
});

export default Greetings;

export { Greetings };
