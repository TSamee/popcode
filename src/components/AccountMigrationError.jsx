import i18next from 'i18next';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';

export default function AccountMigrationError({onDismiss}) {
  return (
    <Fragment>
      <p>{i18next.t('account-migration.error')}</p>
      <div className="modal__buttons">
        <button className="modal__button" onClick={onDismiss}>
          {i18next.t('account-migration.buttons.dismiss')}
        </button>
      </div>
    </Fragment>
  );
}

AccountMigrationError.propTypes = {
  onDismiss: PropTypes.func.isRequired,
};
