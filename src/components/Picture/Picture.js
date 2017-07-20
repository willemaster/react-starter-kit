import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Picture.css';

class Picture extends React.Component {
  static getClassName(val) {
    if (val) {
      return s.on;
    }

    return s.off;
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td className={Picture.getClassName(this.props.picture.tl)}>*</td>
            <td className={Picture.getClassName(this.props.picture.tc)}>*</td>
            <td className={Picture.getClassName(this.props.picture.tr)}>*</td>
          </tr>
          <tr>
            <td className={Picture.getClassName(this.props.picture.cl)}>*</td>
            <td className={Picture.getClassName(this.props.picture.cc)}>*</td>
            <td className={Picture.getClassName(this.props.picture.cr)}>*</td>
          </tr>
          <tr>
            <td className={Picture.getClassName(this.props.picture.bl)}>*</td>
            <td className={Picture.getClassName(this.props.picture.bc)}>*</td>
            <td className={Picture.getClassName(this.props.picture.br)}>*</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default withStyles(s)(Picture);
