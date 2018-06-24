import _ from 'lodash';


export const message = ({content, title, action, uid}) => {
  return !_.isEmpty(content) ?
    {
      uid: uid || null, // you can specify your own uid if required
      title: title || null,
      message: content,
      position: 'tc',
      autoDismiss: 5,
      action: action || null,
    } : console.log("The content is required.");
};
