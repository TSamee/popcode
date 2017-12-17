import partial from 'lodash/partial';
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ConsoleEntry from './ConsoleEntry';
import ConsoleInput from './ConsoleInput';

export default function Console({
  currentProjectKey,
  history,
  isEnabled,
  isOpen,
  onInput,
  onToggleVisible,
}) {
  if (!isEnabled) {
    return null;
  }

  const console = (
    <div className="console__scroll-container output__item">
      <div className="console__repl">
        <ConsoleInput onInput={onInput} />
        {history.map((entry, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <ConsoleEntry entry={entry} key={key} />
        )).valueSeq().reverse()}
      </div>
    </div>
  );

  const chevron = isOpen ? ' \uf078' : ' \uf077';

  return (
    <div className="console">
      <div
        className="label console__label"
        onClick={partial(onToggleVisible, currentProjectKey)}
      >
        Console
        <span className="console__chevron u__icon">{chevron}</span>
      </div>
      {isOpen ? console : null}
    </div>
  );
}

Console.propTypes = {
  currentProjectKey: PropTypes.string.isRequired,
  history: ImmutablePropTypes.iterable.isRequired,
  isEnabled: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onInput: PropTypes.func.isRequired,
  onToggleVisible: PropTypes.func.isRequired,
};