import React from 'react'
import PropTypes from 'prop-types'
import NotifySystem from 'react-notification-system'
import _ from 'lodash'
import { connect } from 'react-redux'

import { hide } from './Actions'


class Notifications extends React.Component {
  system () {
    return this.refs.notify
  }

  componentWillReceiveProps (nextProps) {
    const {notifications, translate, hide} = nextProps
    let notificationIds
    const systemNotifications = this.system().state.notifications || []
    if (notifications && notifications.length > 0) {
      notificationIds = notifications.map(notification => notification.uid);
      // Get all active notifications from react-notification-system
      /// and remove all where uid is not found in the reducer
      (systemNotifications).forEach(notification => {
        if (notificationIds.indexOf(notification.uid) < 0) {
          this.system().removeNotification(notification.uid)
        }
      })

      notifications.forEach(notification => {
        this.system().addNotification({
          ...notification,
          title: !_.isEmpty(notification.title) ? notification.title : null,
          message: !_.isEmpty(notification.message) ? notification.message : null,
          action: _.isObject(notification.action) ? {
              label: notification.action.label,
              callback: notification.action.callback
            }
            : null,
          onRemove: () => {
            hide(notification.uid)
            notification.onRemove && notification.onRemove()
          }
        })
      })
    }

    if ((this.props.notifications !== notifications) && notifications.length === 0) {
      this.system().clearNotifications()
    }
  }

  shouldComponentUpdate (nextProps) {
    return this.props !== nextProps
  }

  render() {
    const style = {
      NotificationItem: {
        DefaultStyle: {
          textAlign: 'center',
          marginTop: '80px',
          lineHeight: '16px',
          fontSize: '16px',
        },
      }
    }
    const { ...rest } = this.props

    return (
      <NotifySystem ref='notify' {...rest} style={style} />
    )
  }
}

Notifications.propTypes = {
  notifications: PropTypes.array,
  translate: PropTypes.func,
  hide: PropTypes.func,
}

function mapStateToProps (state) {
  return {
    notifications: state.notifications
  }
}

export default connect(mapStateToProps, {hide})(Notifications)
