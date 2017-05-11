// @flow

import React from 'react'
import { themr } from 'react-css-themr'
import cn from 'classnames'
import Icon from 'components/Icon'
import Button from 'components/Button'

export const defaultStyles = {
  content: '',
  icon: '',
}

const Modal = ({
  title,
  open,
  onClose,
  children,
  actions = [],
  theme,
}: {
  title?: string,
  open: boolean,
  onClose: () => void,
  closeOnEscape?: boolean,
  children?: Element,
  actions?: Array<{
    icon?: string,
    className?: string,
    iconClassName?: string,
    label?: string,
    disabled?: boolean,
    onClick: Function,
  }>,
  theme: {
    [key: string]: string,
  },
}) => (
  <div className={cn('modal', { 'is-active': open })}>
    <div className="modal-background" />
    <div className={cn('modal-card', theme.content)}>
      {title && (
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
        </header>
      )}
      <section className="modal-card-body">
        {children}
      </section>
      <footer className="modal-card-foot">
        {actions.length > 0 && actions.map(
          ({ icon, label, iconClassName, className, onClick, disabled = false }) => (
            <Button
              key={label}
              className={className}
              onClick={onClick}
              disabled={disabled}
            >
              {!!icon && (
                <Icon name={icon} className={iconClassName} />
              )}
              {!!label && (
                <span>{label}</span>
              )}
            </Button>
          ),
        )}
      </footer>
    </div>
    <button className="modal-close" onClick={() => onClose()} />
  </div>
)

Modal.defaultProps = {
  title: null,
  children: null,
  footer: null,
  closeOnEscape: false,
  actions: [],
}

export default themr('Modal', defaultStyles)(Modal)
