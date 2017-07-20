import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Canvas.css';
import { toggleCanvasCell, submitCanvas } from '../../actions/canvas';

@connect(store => ({
  canvas: store.canvas.canvas,
}))
class Canvas extends React.Component {
  static getClassName(val) {
    if (val) {
      return s.on;
    }

    return s.off;
  }

  toggle = (cell) => {
    this.props.dispatch(toggleCanvasCell(cell));
  };

  submitCanvas = () => {
    this.props.dispatch(submitCanvas(this.props.canvas));
  };

  render() {
    return (
      <div>
        <h1>Submit new picture</h1>
        <table>
          <tbody>
            <tr>
              <td onClick={() => this.toggle('tl')} className={Canvas.getClassName(this.props.canvas.tl)}>*</td>
              <td onClick={() => this.toggle('tc')} className={Canvas.getClassName(this.props.canvas.tc)}>*</td>
              <td onClick={() => this.toggle('tr')} className={Canvas.getClassName(this.props.canvas.tr)}>*</td>
            </tr>
            <tr>
              <td onClick={() => this.toggle('cl')} className={Canvas.getClassName(this.props.canvas.cl)}>*</td>
              <td onClick={() => this.toggle('cc')} className={Canvas.getClassName(this.props.canvas.cc)}>*</td>
              <td onClick={() => this.toggle('cr')} className={Canvas.getClassName(this.props.canvas.cr)}>*</td>
            </tr>
            <tr>
              <td onClick={() => this.toggle('bl')} className={Canvas.getClassName(this.props.canvas.bl)}>*</td>
              <td onClick={() => this.toggle('bc')} className={Canvas.getClassName(this.props.canvas.bc)}>*</td>
              <td onClick={() => this.toggle('br')} className={Canvas.getClassName(this.props.canvas.br)}>*</td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => this.submitCanvas()}>Submit!</button>
      </div>
    );
  }
}

export default withStyles(s)(Canvas);
